//@module
/*
  Copyright 2011-2014 Marvell Semiconductor, Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

exports.pins = {
    xPos: { type: "Analog" },
    yPos: { type: "Analog" }
};

exports.configure = function(){
	this.xPos.init();
    this.yPos.init();
}

exports.read = function() {
    return { xPos: this.xPos.read(), yPos: this.yPos.read() };
}

exports.metadata = {
	sources: [
		{
			name: "read",
			result: 
				{ type: "Object", name: "result", properties:
					[
						{ type: "Number", name: "xPos" },
						{ type: "Number", name: "yPos" },
					]
				},
		},
	]
};