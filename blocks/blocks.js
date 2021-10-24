Blockly.defineBlocksWithJsonArray([
{
  "type": "ultrasonic_read",
  "message0": "Ultrasonic trig pin: %1 echo pin: %2 read distance (cm)",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "trig",
      "options": [
        [
          "OUT5",
          "34"
        ],
        [
          "OUT2",
          "27"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ],
        [
          "VN",
          "39"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "echo",
      "options": [
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ],
        [
          "IN3",
          "34"
        ],
        [
          "IN4",
          "35"
        ],
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ],
        [
          "VN",
          "39"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": "#004098",
  "tooltip": "Attach your Ultrasonic to Input, Output Pins",
  "helpUrl": "https://tektecheg.github.io"
}
]);
