def chop ( target_int, int_array, index_offset = 0 )
  mid_index = int_array.length / 2  
  mid_value = int_array[mid_index]

  return -1 if int_array.length == 0
  return -1 if int_array.length == 1 && mid_value != target_int

  if mid_value == target_int
    return mid_index + index_offset
  elsif mid_value > target_int  
    chop( target_int, int_array.slice(0, mid_index), 0 )
  else
    chop( target_int, int_array.slice(mid_index, mid_index + 1), mid_index )
  end 
end
