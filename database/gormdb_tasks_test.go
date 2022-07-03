package database_test

import (
	"errors"
	"sort"
	"testing"

	pb "github.com/autograde/quickfeed/ag"
	"github.com/autograde/quickfeed/internal/qtest"
	"github.com/google/go-cmp/cmp"
	"google.golang.org/protobuf/testing/protocmp"
	"gorm.io/gorm"
)

func TestGormDBNonExistingTasksForAssignment(t *testing.T) {
	db, cleanup := qtest.TestDB(t)
	defer cleanup()
	admin := qtest.CreateFakeUser(t, db, uint64(1))
	course := &pb.Course{}
	qtest.CreateCourse(t, db, admin, course)

	assignments := []*pb.Assignment{
		{CourseID: course.GetID(), Name: "Lab1", Order: 1},
		{CourseID: course.GetID(), Name: "Lab2", Order: 2},
	}

	for _, assignment := range assignments {
		if err := db.CreateAssignment(assignment); err != nil {
			t.Error(err)
		}
	}

	assignments, err := db.GetAssignmentsByCourse(course.GetID(), false)
	if err != nil {
		t.Error(err)
	}
	if len(assignments) == 0 {
		t.Errorf("len(assignments) == %d, expected 2", len(assignments))
	}

	wantError := gorm.ErrRecordNotFound
	if _, gotError := db.GetTasks(&pb.Task{AssignmentID: assignments[0].GetID()}); gotError != wantError {
		t.Errorf("got error '%v' wanted '%v'", gotError, wantError)
	}
}

// TestGormDBSynchronizeAssignmentTasks tests whether SynchronizeAssignmentTasks
// correctly synchronizes tasks in the database, and whether it returns the correct created and updated tasks.
// It loops through possible assignment sequences.
func TestGormDBSynchronizeAssignmentTasks(t *testing.T) {
	tests := map[string]struct {
		foundAssignmentSequence [][]*pb.Assignment
	}{
		"Create update delete": {
			foundAssignmentSequence: [][]*pb.Assignment{
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "2"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "2"},
					}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 1, Title: "x", Body: "y", Name: "2"},
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "3"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "y", Body: "x", Name: "1"},
					}},
				},
			},
		},
		"No initial tasks": {
			foundAssignmentSequence: [][]*pb.Assignment{
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "1"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "1"},
					}},
				},
			},
		},
		"Delete and recreate": {
			foundAssignmentSequence: [][]*pb.Assignment{
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "2"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "2"},
					}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "2"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "2"},
					}},
					{Name: "Lab3", Order: 3, Tasks: []*pb.Task{
						{AssignmentOrder: 3, Title: "x", Body: "x", Name: "1"},
						{AssignmentOrder: 3, Title: "x", Body: "x", Name: "2"},
					}},
				},
			},
		},
		"Mirrored tasks": {
			foundAssignmentSequence: [][]*pb.Assignment{
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "x", Body: "x", Name: "hello_world"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "hello_world"},
					}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "y", Body: "y", Name: "hello_world"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "x", Body: "x", Name: "hello_world"},
					}},
					{Name: "Lab3", Order: 3, Tasks: []*pb.Task{
						{AssignmentOrder: 3, Title: "x", Body: "x", Name: "hello_world"},
					}},
				},
				{
					{Name: "Lab1", Order: 1, Tasks: []*pb.Task{
						{AssignmentOrder: 1, Title: "y", Body: "y", Name: "hello_world"},
					}},
					{Name: "Lab2", Order: 2, Tasks: []*pb.Task{
						{AssignmentOrder: 2, Title: "y", Body: "y", Name: "hello_world"},
					}},
					{Name: "Lab3", Order: 3, Tasks: []*pb.Task{
						{AssignmentOrder: 3, Title: "y", Body: "y", Name: "not_hello_world"},
					}},
				},
			},
		},
	}

	sortTasksByName := func(tasks []*pb.Task) {
		sort.Slice(tasks, func(i, j int) bool {
			return tasks[i].Name < tasks[j].Name
		})
	}
	getTasksFromAssignments := func(assignments []*pb.Assignment) map[uint32]map[string]*pb.Task {
		taskMap := make(map[uint32]map[string]*pb.Task)
		for _, assignment := range assignments {
			temp := make(map[string]*pb.Task)
			for _, task := range assignment.Tasks {
				temp[task.Name] = task
			}
			taskMap[assignment.Order] = temp
		}
		return taskMap
	}

	for name, tt := range tests {
		t.Run(name, func(t *testing.T) {
			db, cleanup := qtest.TestDB(t)
			defer cleanup()
			admin := qtest.CreateFakeUser(t, db, 1)
			course := &pb.Course{}
			qtest.CreateCourse(t, db, admin, course)

			previousTasks := make(map[uint32]map[string]*pb.Task)

			for _, foundAssignments := range tt.foundAssignmentSequence {
				wantTasks := []*pb.Task{}
				for _, assignment := range foundAssignments {
					assignment.CourseID = course.GetID()
					if err := db.CreateAssignment(assignment); err != nil {
						t.Error(err)
					}
					wantTasks = append(wantTasks, assignment.Tasks...)
				}
				gotCreatedTasks, gotUpdatedTasks, err := db.SynchronizeAssignmentTasks(course, getTasksFromAssignments(foundAssignments))
				if err != nil {
					t.Error(err)
				}
				gotTasks, err := db.GetTasks(&pb.Task{})
				if err != nil && !errors.Is(err, gorm.ErrRecordNotFound) {
					t.Fatal(err)
				}

				wantCreatedTasks := []*pb.Task{}
				wantUpdatedTasks := []*pb.Task{}
				for _, wantTask := range wantTasks {
					taskMap, ok := previousTasks[wantTask.GetAssignmentOrder()]
					if !ok {
						previousTasks[wantTask.GetAssignmentOrder()] = make(map[string]*pb.Task)
					}
					task, ok := taskMap[wantTask.GetName()]
					if ok {
						// wantTask in previousTasks map; it must have been updated
						wantTask.ID = task.GetID()
						wantTask.AssignmentID = task.GetAssignmentID()
						if task.HasChanged(wantTask) {
							wantUpdatedTasks = append(wantUpdatedTasks, wantTask)
						}
					} else {
						// wantTask not in previousTasks map; it must have been created
						wantCreatedTasks = append(wantCreatedTasks, wantTask)
					}
					delete(taskMap, wantTask.GetName())
				}

				// All tasks remaining in previousTasks must have been deleted.
				for _, taskMap := range previousTasks {
					for name, deletedTask := range taskMap {
						deletedTask.MarkDeleted()
						wantUpdatedTasks = append(wantUpdatedTasks, deletedTask)
						delete(taskMap, name)
					}
				}

				sortTasksByName(wantTasks)
				sortTasksByName(gotTasks)
				if diff := cmp.Diff(wantTasks, gotTasks, protocmp.Transform()); diff != "" {
					t.Errorf("Synchronization mismatch (-wantTasks, +gotTasks):\n%s", diff)
				}

				sortTasksByName(wantCreatedTasks)
				// gotCreatedTasks is already sorted by SynchronizeAssignmentTasks
				if diff := cmp.Diff(wantCreatedTasks, gotCreatedTasks, protocmp.Transform()); diff != "" {
					t.Errorf("Synchronization return mismatch (-wantCreatedTasks, +gotCreatedTasks):\n%s", diff)
				}

				sortTasksByName(wantUpdatedTasks)
				sortTasksByName(gotUpdatedTasks)
				if diff := cmp.Diff(wantUpdatedTasks, gotUpdatedTasks, protocmp.Transform()); diff != "" {
					t.Errorf("Synchronization return mismatch (-wantUpdatedTasks, +gotUpdatedTasks):\n%s", diff)
				}

				for _, task := range wantTasks {
					previousTasks[task.GetAssignmentOrder()][task.GetName()] = task
				}
			}
		})
	}
}
