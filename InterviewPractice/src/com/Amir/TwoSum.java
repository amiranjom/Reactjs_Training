/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *                        NOTES:
 *                        TIME COMPLEXITY O(n^2)
 *                        BETTER APPROACH: One-Pass Hash Table
 * */

package com.Amir;

public class TwoSum {
  public int[] twoSum(int[] nums, int target) {
    for(int i=0; i < nums.length; i++){
      for(int ii=i+1; ii < nums.length; ii++){
        if(nums[i]+nums[ii] == target){
          System.out.println("i is : " + i + " ii is : " + ii);
          return new int[] {i,ii};
        }
      }

    }
    return new int[] {} ;

  }
}


