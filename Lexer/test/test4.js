// definition of multi-dimensional array

var table = [
    [ [-9,1,2,-2,3,-18,1,-1,4,5,6,7,-1,8,9,10,11,12,13,14,15,-1,16,2321,18,19,-1,20,-3,21,22,23,24,25,794,27,28,26,29,26,30,31,32,26,33,34,35,794,36,37,26,-4,26,-1,21,22,23,24,25,794,27,28,26,29,26,30,31,32,26,33,34,35,794,36,37,26,-133], -1 ],
    [ [-9,1,-22,1,-223], 0 ],
    [ [-256], 1 ],
    [ [-10,38,-245], 1 ],
    [ [2599,-1,551,-1,61991], -1 ],
    [ [-256], 12 ],
    [ [-48,2600,-7,1576,-26,1576,-153], -1 ],
    [ [-48,553,-206], -1 ],
    [ [2602,-1,554,-1,61994], -1 ],
    [ [-256], 13 ],
    [ [-256], 14 ],
    [ [-256], 21 ],
    [ [-256], 20 ],
    [ [-256], 11 ],
    [ [-48,16,2321,-198], -1 ],
    [ [-68,43,44,-2,45,46,-2,47,-2,48,-20,43,44,-2,45,46,-2,47,-2,48,-144], -1 ],
    [ [-256], 19 ],
    [ [-48,2609,-198], 19 ],
    [ [-256], 10 ],
    [ [2610,-1,562,-1,62002], 2 ],
    [ [-256], 5 ],
    [ [-48,2611,-7,819,52,2355,53,1075,54,1843,-4,51,-1,819,52,2355,53,1075,54,1843,-133], 8 ],
    [ [-48,2611,-7,563,55,51,56,819,57,819,58,59,51,60,51,61,819,62,1075,-4,51,-1,563,55,51,56,819,57,819,58,59,51,60,51,61,819,62,1075,-133], 22 ],
    [ [-48,2611,-7,2867,63,64,563,65,2611,-4,51,-1,2867,63,64,563,65,2611,-133], 22 ],
    [ [-48,2611,-7,1075,66,5427,-4,51,-1,1075,66,5427,-133], 22 ],
    [ [-48,2611,-7,3635,67,2867,-4,51,-1,3635,67,2867,-133], 22 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 22 ],
    [ [-48,2611,-7,3379,68,3123,-4,51,-1,3379,68,3123,-133], 22 ],
    [ [-48,2611,-7,3123,69,1331,70,1843,-4,51,-1,3123,69,1331,70,1843,-133], 22 ],
    [ [-48,2611,-7,819,71,3635,72,1843,-4,51,-1,819,71,3635,72,1843,-133], 22 ],
    [ [-48,2611,-7,3635,73,2867,-4,51,-1,3635,73,2867,-133], 22 ],
    [ [-48,2611,-7,4403,74,2099,-4,51,-1,4403,74,2099,-133], 22 ],
    [ [-48,2611,-7,1843,75,819,76,3635,-4,51,-1,1843,75,819,76,3635,-133], 22 ],
    [ [-48,2611,-7,3635,77,1075,78,1587,-4,51,-1,3635,77,1075,78,1587,-133], 22 ],
    [ [-48,2611,-7,51,79,563,80,3635,81,1587,-4,51,-1,51,79,563,80,3635,81,1587,-133], 22 ],
    [ [-48,2611,-7,82,4403,83,1075,84,85,51,-4,51,-1,82,4403,83,1075,84,85,51,-133], 22 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 9 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 9 ],
    [ [-256], 1 ],
    [ [2599,-1,551,-1,5159,86,56615], -1 ],
    [ [-48,2600,-7,1576,-26,1576,-153], 18 ],
    [ [-48,553,-206], 17 ],
    [ [-39,87,-216], -1 ],
    [ [-66,88,-16,89,-3,90,-10,88,-16,89,-3,90,-136], -1 ],
    [ [-81,91,-31,91,-142], -1 ],
    [ [-73,92,-31,92,-150], 7 ],
    [ [-78,93,-31,93,-145], -1 ],
    [ [-79,94,-31,94,-144], 6 ],
    [ [-82,95,-31,95,-141], -1 ],
    [ [-48,2609,-198], 19 ],
    [ [2610,-1,562,-1,62002], 2 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 22 ],
    [ [-48,2611,-7,563,96,5939,-4,51,-1,563,96,5939,-133], 22 ],
    [ [-48,2611,-7,819,97,5683,-4,51,-1,819,97,5683,-133], 22 ],
    [ [-48,2611,-7,2867,98,3635,-4,51,-1,2867,98,3635,-133], 22 ],
    [ [-48,2611,-7,563,99,3891,100,1843,-4,51,-1,563,99,3891,100,1843,-133], 22 ],
    [ [-48,2611,-7,4147,101,2355,-4,51,-1,4147,101,2355,-133], 22 ],
    [ [-48,2611,-7,4915,102,1587,-4,51,-1,4915,102,1587,-133], 22 ],
    [ [-48,2611,-7,2099,103,4403,-4,51,-1,2099,103,4403,-133], 22 ],
    [ [-48,2611,-7,1075,104,5427,-4,51,-1,1075,104,5427,-133], 22 ],
    [ [-48,2611,-7,2867,105,3635,-4,51,-1,2867,105,3635,-133], 22 ],
    [ [-48,2611,-7,2611,106,3891,-4,51,-1,2611,106,3891,-133], 22 ],
    [ [-48,2611,-7,563,107,3891,108,1843,-4,51,-1,563,107,3891,108,1843,-133], 22 ],
    [ [-48,2611,-7,563,109,110,1075,111,3123,112,1075,-4,51,-1,563,109,110,1075,111,3123,112,1075,-133], 22 ],
    [ [-48,2611,-7,3891,113,2611,-4,51,-1,3891,113,2611,-133], 22 ],
    [ [-48,2611,-7,5939,114,115,51,-4,51,-1,5939,114,115,51,-133], 22 ],
    [ [-48,2611,-7,563,116,5171,117,118,51,-4,51,-1,563,116,5171,117,118,51,-133], 22 ],
    [ [-48,2611,-7,4403,119,2099,-4,51,-1,4403,119,2099,-133], 22 ],
    [ [-48,2611,-7,563,120,5171,121,122,51,-4,51,-1,563,120,5171,121,122,51,-133], 22 ],
    [ [-48,2611,-7,3891,123,2611,-4,51,-1,3891,123,2611,-133], 22 ],
    [ [-48,2611,-7,4403,124,2099,-4,51,-1,4403,124,2099,-133], 22 ],
    [ [-48,2611,-7,125,5683,126,127,51,-4,51,-1,125,5683,126,127,51,-133], 22 ],
    [ [-48,2611,-7,4403,128,2099,-4,51,-1,4403,128,2099,-133], 22 ],
    [ [-48,2611,-7,3891,129,2611,-4,51,-1,3891,129,2611,-133], 22 ],
    [ [-48,2611,-7,130,6451,-4,51,-1,130,6451,-133], 22 ],
    [ [-48,2611,-7,131,3635,132,2611,-4,51,-1,131,3635,132,2611,-133], 22 ],
    [ [-48,2611,-7,133,3635,134,2611,-4,51,-1,133,3635,134,2611,-133], 22 ],
    [ [-48,2611,-7,2867,135,1331,136,2099,-4,51,-1,2867,135,1331,136,2099,-133], 22 ],
    [ [-48,2611,-7,2099,137,2355,138,1843,-4,51,-1,2099,137,2355,138,1843,-133], 22 ],
    [ [-48,2611,-7,563,139,5939,-4,51,-1,563,139,5939,-133], 22 ],
    [ [-48,2611,-7,563,140,141,1075,142,4403,-4,51,-1,563,140,141,1075,142,4403,-133], 22 ],
    [ [-48,2611,-7,143,5683,144,145,51,-4,51,-1,143,5683,144,145,51,-133], 22 ],
    [ [-48,2611,-7,5939,146,147,51,-4,51,-1,5939,146,147,51,-133], 22 ],
    [ [-48,2611,-7,5939,148,563,-4,51,-1,5939,148,563,-133], 22 ],
    [ [-48,2611,-7,149,4403,150,1843,-4,51,-1,149,4403,150,1843,-133], 22 ],
    [ [-48,2611,-7,151,6451,-4,51,-1,151,6451,-133], 22 ],
    [ [2599,-1,551,-1,5159,86,56615], 16 ],
    [ [-256], 15 ],
    [ [-256], 4 ],
    [ [-256], 4 ],
    [ [-256], 4 ],
    [ [-85,152,-31,152,-138], 5 ],
    [ [-71,153,-31,153,-152], -1 ],
    [ [-67,154,-31,154,-156], -1 ],
    [ [-87,155,-31,155,-136], -1 ],
    [ [-71,156,-31,156,-152], -1 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-48,2611,-7,6707,-4,51,-1,6707,-133], 3 ],
    [ [-256], 5 ],
    [ [-72,157,-31,157,-151], -1 ],
    [ [-76,158,-31,158,-147], -1 ],
    [ [-256], 6 ],
    [ [-256], 4 ],
    [ [-256], 7 ],
    [ [-85,159,-31,159,-138], -1 ],
    [ [-68,160,-31,160,-155], -1 ],
    [ [-69,161,-31,161,-154], -1 ],
    [ [-256], 4 ]
];