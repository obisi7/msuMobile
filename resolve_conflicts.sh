projectfile=find -d . -name 'msumobile.pbxproj' projectdir=echo *.xcodeproj projectfile="${projectdir}/msumobile.pbxproj" tempfile="${projectdir}/msumobile.pbxproj.out" savefile="${projectdir}/msumobile.pbxproj.mergesave"

cat $projectfile | grep -v "<<<<<<< HEAD" | grep -v "=======" | grep -v "^>>>>>>> " > $tempfile mv $tempfile $projectfile
