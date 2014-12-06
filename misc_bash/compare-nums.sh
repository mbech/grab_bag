#!/bin/bash
#Given two integers X and Y, identify whether 
#"X is lesser than Y" or "X is greater than Y" or "X is equal to Y".
read X
read Y

if (($X < $Y)); then
  echo "X is lesser than Y"
elif (($X == $Y)); then
  echo "X is equal to Y"
elif(($X > $Y)); then
  echo "X is greater than Y"
fi

