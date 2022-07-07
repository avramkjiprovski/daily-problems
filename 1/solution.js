class Solution {
    solve(rooms, target) {
        for(let i = 0; i < rooms.length; i++){
            if(rooms[i] >= target) return rooms[i]
        }
        return -1
    }
}