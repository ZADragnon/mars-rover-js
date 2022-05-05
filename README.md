# Mars Rover Challenge
## Introduction to the challenge
A rover has been sent to Mars to survey the terrain, and you have been charged with creating their navigation system. These are the specifications you have been given:
* Mars's surface has been divided into zone and each zone can be modeled as a two-dimensional Cartesian grid. The zones have been very carefully surveyed ahead of time and are deemed sage for exploration within the zone's bounds, as represented by a single Cartesian coordinate. e.g. (5, 5)
* The rover understands the cardinal points and can face either East (E), West (W), North (N) or South (S)
* The rover understands three commands:
    * M - Move one space forward in the direction it is facing
    * R - Rotate 90 degrees to the right
    * L - Rotate 90 degrees to the left
* Due to the transmission delay in communicating with the rover on Mars, you are only able to send the rover a list of commands. These commands will be executed by the rover and its resulting location sent back to HQ. This is an example of the list of commands sent to the rover:
### File Setup
```plaintext
8 8
1 2 E
MMLMRMMRRMML
```
This is how the rover will interpret the commands:

The first line describes how big the current zone is. This zone’s boundary is at the Cartesian coordinate of 8,8 and the zone comprises 64 blocks. The second line describes the rover’s
staring location and orientation. This rover would start at position 1 on the horizontal axis,
position 2 on the vertical axis and would be facing East (E). The third line is the list of
commands (movements and rotations) to be executed by the rover.

As a result of following these commands, a rover staring at 1 2 E in this zone would land up
at 3 3 S.

## How to run the code
```
git clone https://github.com/ZADragnon/mars-rover-js.git
cd mars-rover-js
npm install
npm start or node . [file path]
```

## How to test the code
```
npm test
```

## Design decisions
My approach for this challenge was to solve it through basic OOP concepts and using JavaScript classes to represent the objects. Through using OOP, I can keep the solution simple (KISS) and represent the logic in such a way that I don't repeat myself (DRY). This also makes the code easy to test. I implement inheritance just to show case the concept and how I would use JavaScript extend with classes.

## Configuration used
nodejs v17.9.0

npm v8.8.0
