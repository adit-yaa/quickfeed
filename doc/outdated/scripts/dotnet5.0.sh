#image/mcr.microsoft.com/dotnet/sdk:5.0

start=$SECONDS
printf "*** Preparing for Test Execution ***\n"

ASSIGNDIR=/quickfeed/assignments/{{ .AssignmentName }}/
TESTDIR=/quickfeed/tests/{{ .AssignmentName }}/

cd $TESTDIR

# Perform lab specific setup
if [ -f "setup.sh" ]; then
    bash setup.sh
fi

printf "\n*** Finished Test Setup in $(( SECONDS - start )) seconds ***\n"

start=$SECONDS
printf "\n*** Running Tests ***\n\n"
QUICKFEED_SESSION_SECRET={{ .RandomSecret }} dotnet test "--logger:console;verbosity=detailed" 2>&1
printf "\n*** Finished Running Tests in $(( SECONDS - start )) seconds ***\n"
