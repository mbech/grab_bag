#!/bin/bash
read count
sum=0
counter=0

while [ $counter -lt $count ]; do
  read input
  ((sum+=input))
  ((counter++))
done

echo "$sum/$count" | bc -l | xargs printf "%.3f" 
