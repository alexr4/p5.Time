# p5.Time
This snippet/library provide a time extension for p5js allowing to get deltaTime and pause time
It's provide new times variables which can be used for animation or game :

* ```getTime()``` : provides the time passed in milliseconds.
* ```getDeltaTime()``` : provides the delta time between two frames.
* ```getLastTime()``` : provides the last saved time in milliseconds.

You can play/pause the time management at any time using the following functions :
* ```timePause()``` : will pause the time count.
* ```timePlay()``` : will play the time count. By default the time management is playing
