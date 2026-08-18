class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # number_to_index is our hash map:
        #   key   = a number we've already seen
        #   value = the index where we saw it
        number_to_index = {}

        for index in range(len(nums)):      # index = 0, 1, 2, ...
            number = nums[index]            # the number at that position
            needed = target - number        # the partner that would complete the pair

            if needed in number_to_index:
                # partner is behind us — return its index and ours
                return [number_to_index[needed], index]

            # no partner yet — file this number, keep walking
            number_to_index[number] = index