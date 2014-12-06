#!/bin/bash
read X
read Y
read Z

equi="EQUILATERAL"
iso="ISOSCELES"
scal="SCALENE"

if [ $X -eq $Y ]; then
  if [ $X -eq $Z ]; then 
    echo $equi
  else
    echo $iso
  fi
elif [ $X -eq $Z ] || [ $Y -eq $Z ]; then
  echo $iso
else
  echo $scal
fi
