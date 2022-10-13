#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.2),
    on Mon Jul 11 13:36:35 2022
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.1.2'
expName = 'e1'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/Amanda 1 2/Desktop/PerspectivesPsychopy/perspectives_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1792, 1120], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# Setup ioHub
ioConfig = {}

# Setup iohub keyboard
ioConfig['Keyboard'] = dict(use_keymap='psychopy')

ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, **ioConfig)
eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='iohub')

# Initialize components for Routine "trial"
trialClock = core.Clock()
myWindow = visual.Window(fullscr=True)
myBackground = visual.Polygon(win=myWindow, name="myBackground", edges=4, size=(5,5), pos=(0,0), fillColor=(1,1,1))


#importing necessary libraries
#from psychopy import visual

#drawing the background of the study 
#myBackground = ShapeStim(psychoJS.window, size=(5,5), pos=(0,0), fillColor=(1,1,1)) makes the background white



finStimDir= 'finalStim/' #tells psychopy where to find images

#starting positions for the ball
participantBallRightPos = (.05,-0.5)
participantBallLeftPos = (-.05, -0.5)
playerOneBallPos = (-.45, .50)
playerTwoBallPos = (.45, .50)

#Setting up conditions
#Character set 1
AcharacterOne = "CharacterA1.png"
AcharacterTwo = "CharacterA2.png"
AcharacterThree = "CharacterA3.png"
Apuzzlecharacter ="CharacterA1Puzzle.png"
#Character set 2
BcharacterOne ="CharacterB1.png"
BcharacterTwo = "CharacterB2.png"
BcharacterThree = "CharacterB3.png"
Bpuzzlecharacter = "CharacterB1Puzzle.png"
#ball to use for games
ball = visual.ImageStim(myWindow, pos= participantBallRightPos, size=(.13,.13), image=finStimDir + 'ball.png')

#using experimental ID to set up the condition
#setThrow options
throwResp = ['left', 'right']


expCond = expInfo['participant'][0]
if expCond == "A" or expCond == "B" or expCond == "C" or expCond == "D" or expCond == "E" or expCond == "F" or expCond == "G" or expCond == "H":
    #first game participant
    Participant = AcharacterThree
    #first game left_side 
    PlayerOne = AcharacterTwo
    PlayerOnePuzzle = Apuzzlecharacter
    #first game right_side
    PlayerTwo = AcharacterOne
    #second game participant
    ParticipantTwo =  BcharacterThree
    #second game left_side
    PlayerOneTwo = BcharacterTwo
    PlayeroneTwoPuzzle= Bpuzzlecharacter
    #second game right_side
    PlayerTwoTwo = BcharacterOne

if expCond == "I" or expCond == "J" or expCond == "K" or expCond == "L" or expCond == "M" or expCond == "N" or expCond == "O" or expCond == "P":
    #first game participant
    Participant = BcharacterThree
    #first game left_side 
    PlayerOne = BcharacterTwo
    PlayerOnePuzzle = Bpuzzlecharacter
    #first game right_side
    PlayerTwo = BcharacterOne
    #second game participant
    ParticipantTwo =  AcharacterThree
    #second game left_side
    PlayerOneTwo = AcharacterTwo
    PlayeroneTwoPuzzle= Apuzzlecharacter
    #second game right_side
    PlayerTwoTwo = AcharacterOn
'''
ParticipantTwo = visual.ImageStim(myWindow, pos= (0, -.5),size= (.23,.45) ,image= finStimDir + AcharacterThree)
    PlayerOneTwo = visual.ImageStim(myWindow, pos= (-.5,.5),size= (.23,.45), image=finStimDir + AcharacterTwo)
    PlayerTwoTwo = visual.ImageStim(myWindow, pos= (.5,.5),size= (.23,.45), image=finStimDir + AcharacterOne)
    Participant = visual.ImageStim(myWindow, pos= (0, -.5),size= (.23,.45) ,image= finStimDir + BcharacterThree)
    PlayerOne = visual.ImageStim(myWindow, pos= (-.5,.5),size= (.23,.45), image=finStimDir + BcharacterTwo)
    PlayerTwo = visual.ImageStim(myWindow, pos= (.5,.5),size= (.23,.45), image=finStimDir + BcharacterOne)
'''

#to make throws, left= 0, right=1
def CalcPoints(ballx, bally, futurex, futurey, step, receive):
    if receive =='right':
        rise= step/float(futurey)- bally
        run = step/float(futurex)- ballx
        points = [[ballx, bally]]
        for i in range(175):
            curPoint = [(points[i][0] + step), (points[i][1]+step+0.008)]
            points.append(curPoint)
        return points
    elif receive == 'left':
        rise= step/float(futurey)- bally
        run = step/float(futurex)- ballx
        points = [[ballx, bally]]
        for i in range(175):
            curPoint = [(points[i][0] - step), (points[i][1]+step+0.008)]
            points.append(curPoint)
        return points
    elif receive == 'one':
        rise= step/float(futurey)- bally
        run = step/float(futurex)- ballx
        points = [[ballx, bally]]
        for i in range(175):
            curPoint = [(points[i][0] + step), (points[i][1])]
            points.append(curPoint)
        return points
    elif receive == 'two':
        rise= step/float(futurey)- bally
        run = step/float(futurex)- ballx
        points = [[ballx, bally]]
        for i in range(175):
            curPoint = [(points[i][0] - step), (points[i][1])]
            points.append(curPoint)
        return points
    elif receive == 'pOne':
        rise= step/float(futurey)- bally
        run = step/float(futurex)- ballx
        points = [[ballx, bally]]
        for i in range(75):
            curPoint = [(points[i][0] + step), (points[i][1]-step-0.008)]
            points.append(curPoint)
        return points
    elif receive == 'pTwo':
        rise= step/float(futurey)- bally
        run = step/float(futurex)- ballx
        points = [[ballx, bally]]
        for i in range(175):
            curPoint = [(points[i][0] - step), (points[i][1]-step-0.008)]
            points.append(curPoint)
        return points

part2Two = CalcPoints(participantBallRightPos[0],participantBallRightPos[1],playerTwoBallPos[0],playerTwoBallPos[1],0.005, 'right')
part2One = CalcPoints(participantBallLeftPos[0], participantBallLeftPos[1], playerOneBallPos[0], playerOneBallPos[1],0.005, 'left')
one2Two = CalcPoints(playerOneBallPos[0], playerOneBallPos[1],playerTwoBallPos[0],playerTwoBallPos[1],0.005, 'one')
two2One = CalcPoints(playerTwoBallPos[0], playerTwoBallPos[1],playerOneBallPos[0],playerOneBallPos[1],0.005, 'two')
one2Part = CalcPoints(playerOneBallPos[0], playerOneBallPos[1],participantBallRightPos[0],participantBallRightPos[1],0.005, 'pOne')
two2Part = CalcPoints(playerTwoBallPos[0], playerTwoBallPos[1],participantBallRightPos[0],participantBallRightPos[1],0.005, 'pTwo')

#hopefully lets me end the game? 
numThrow=0


#defining questionType
if expCond == "A" or expCond == "I" or expCond == "E" or expCond == "M": 
    questionType = 1
elif expCond == "B" or expCond == "F" or expCond == "J" or expCond == "N": 
    questionType = 2
elif expCond == "C" or expCond == "G" or expCond == "K" or expCond == "O": 
    questionType = 3
elif expCond == "D" or expCond == "H" or expCond == "L" or expCond == "P": 
    questionType = 4


# Initialize components for Routine "introductions"
introductionsClock = core.Clock()
obsText= "Hey Look! Here are some people. They're going to play catch. Let's watch!"
playText = "Hey Look! Here are some people. We're going to play catch. Let's play!"

if expCond == "E" or expCond == "F" or expCond== "G" or expCond=="H" or expCond =="M" or expCond=="N" or expCond=="O" or expCond=="P":
    gameType = "observe"
    participantName = "Alex"
    playerTwoName = "Skyler"
    playerOneName = "Taylor"
    greeting = obsText
    gameType2= "play"
    participantNameTwo="Morgan"
    playerTwoNameTwo="Jordan"
    playerOneNameTwo= "You"
    greeting2 = playText
elif expCond == "A" or expCond == "B" or expCond== "C" or expCond=="D" or expCond =="I" or expCond=="J" or expCond=="K" or expCond=="L": 
    gameType= "play"
    playerOneName =  "Morgan"
    playerTwoName = "Jordan"
    participantName = "You"
    greeting = playText
    gameType2= "observe"
    participantNameTwo="Alex"
    playerTwoNameTwo="Skyler"
    playerOneNameTwo="Taylor"
    greeting2 = obsText


# Initialize components for Routine "Game"
GameClock = core.Clock()

# Initialize components for Routine "questions"
questionsClock = core.Clock()

# Initialize components for Routine "introductions_game2"
introductions_game2Clock = core.Clock()

# Initialize components for Routine "GameTwo"
GameTwoClock = core.Clock()

ParticipantGame = visual.ImageStim(myWindow, pos= (0, -.5),size= (.23,.45), image= finStimDir+ ParticipantTwo)
PlayerOneGame = visual.ImageStim(myWindow, pos= (-.5,.5),size= (.23,.45), image= finStimDir+PlayerOneTwo)
PlayerTwoGame= visual.ImageStim(myWindow, pos= (.5,.5),size= (.23,.45), image= finStimDir+PlayerTwoTwo)
#warmup
myBackground.draw()
ParticipantGame.draw()
PlayerOneGame.draw()
PlayerTwoGame.draw()
ball.draw()
myWindow.flip()


if expCond == "E" or expCond == "F" or expCond== "G" or expCond=="H" or expCond =="M" or expCond=="N" or expCond=="O" or expCond=="P":
    gameType = "play"
    throwTo=event.waitKeys(keyList=throwResp)[0]
elif expCond == "A" or expCond == "B" or expCond== "C" or expCond=="D" or expCond =="I" or expCond=="J" or expCond=="K" or expCond=="L": 
    gameType = "observe"
    throwTo= throwResp


if gameType == "observe":
    for curPoint in part2Two:
        ball.setPos(curPoint)#throw 1
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(0.5)
        numThrow += 1
#            throwball('playerTwo')
    for curPoint in two2One:
        ball.setPos(curPoint)#throw 2
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(1.5)
        numThrow += 1
#            throwball('playerOne')
    for curPoint in one2Part:#throw 3
        ball.setPos(curPoint)
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
#               throwball (p1)
    for curPoint in part2One:#throw 4
        ball.setPos(curPoint)
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
#               throwball (p1)
    for curPoint in one2Two:#throw 5
        ball.setPos(curPoint)
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
elif gameType == "play":
    while numThrow < 5:
        if throwTo == 'right':
            for curPoint in part2Two: #throw_1r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in two2One: #throw_2r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in one2Part: #throw_3r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(.5)
                numThrow += 1
        elif throwTo == 'left':
            for curPoint in part2One:#throw_1l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
            myBackground.draw()
            PlayerOneGame.draw()
            PlayerTwoGame.draw()
            ParticipantGame.draw()
            myWindow.flip()
            core.wait(.01)
            core.wait(1.5)
            numThrow+=1
            for curPoint in one2Two: #throw_2l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
            myBackground.draw()
            PlayerOneGame.draw()
            PlayerTwoGame.draw()
            ParticipantGame.draw()
            myWindow.flip()
            core.wait(.01)
            core.wait(1.5)
            numThrow += 1
            for curPoint in two2Part: #throw_3l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(.5)
                numThrow += 1
        throwTo2 = event.waitKeys(keyList=keyResp)[0]
        if throwTo2 == 'right':
            for curPoint in part2Two: #throw_4r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in two2One: #throw_5r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
        elif throwTo2 == 'left':
            for curPoint in part2One:#throw_1l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow+=1
            for curPoint in one2Two: #throw_2l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
#Exclusion piece for observed and for play
    while numThrow < 35:
        if throwTo2 == 'right':
            for curPoint in one2Two: 
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in two2One:
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
        elif throwTo2 == 'left':
            for curPoint in two2One:
                    ball.setPos(curPoint)
                    myBackground.draw()
                    PlayerOneGame.draw()
                    PlayerTwoGame.draw()
                    ParticipantGame.draw()
                    ball.draw()
                    myWindow.flip()
                    core.wait(0.01)
                    core.wait(1.5)
                    numThrow += 1
            for curPoint in one2Two:
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1

# Initialize components for Routine "questions2"
questions2Clock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "trial"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
trialComponents = []
for thisComponent in trialComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "trial"-------
while continueRoutine:
    # get current time
    t = trialClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=trialClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial"-------
for thisComponent in trialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "trial" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "introductions"-------
continueRoutine = True
# update component parameters for each repeat
myBackground.draw()
myWindow.flip()




storyText = visual.TextStim(myWindow, text = greeting, pos =(0, .7), wrapWidth= 1.5, color= 'black')
keyControl = visual.TextStim(myWindow, text = "Press Space to begin", wrapWidth= 1.5, color= 'black', pos = (0, -.7))

characterOne = visual.ImageStim(myWindow, pos= (-.5, .15),size= (.23,.45) ,image= finStimDir + PlayerOne)
characterTwo = visual.ImageStim(myWindow, pos= (0, .15),size= (.23,.45) ,image= finStimDir +  Participant)
characterThree= visual.ImageStim(myWindow, pos= (.5, .15),size= (.23,.45) ,image= finStimDir +  PlayerTwo)
characterOneName = visual.TextStim(myWindow, text= playerOneName, pos= (-.5,-.2), color='black')
characterTwoName =visual.TextStim(myWindow, text= participantName, pos= (0,-.2), color='black')
characterThreeName = visual.TextStim(myWindow, text= playerTwoName, pos= (.5,-.2), color='black')


myBackground.draw()
storyText.draw()
keyControl.draw()
characterOne.draw()
characterTwo.draw()
characterThree.draw()
characterOneName.draw()
characterTwoName.draw()
characterThreeName.draw()
myWindow.flip()

introKeyChoices= ['space'] 
introResponse = event.waitKeys(keyList= introKeyChoices)[0]


if gameType== "play":
    gameInstr = visual.TextStim(myWindow, text= "To throw the ball left, press the left arrow key. \n\n To \
throw the ball right, press the right arrow key \n\n Press space to begin.", wrapWidth=1.5, color='black')
    myBackground.draw()
    gameInstr.draw()
    myWindow.flip()
    event.waitKeys(keyList='space')

    myBackground.draw()
    myWindow.flip()

    loadText = visual.TextStim(myWindow, text= "Loading...", pos=(0,0), wrapWidth=1.5, color='black')
    loadShape = visual.Rect(myWindow, size=(0.25,0.25), pos= (-1,-0.2), fillColor= 'aquamarine')

    move= 0

    while move < 80:
        loadShape.pos +=(0.03, 0.0)
        myBackground.draw()
        loadText.draw()
        loadShape.draw()
        myWindow.flip()
        core.wait(.05)
        move= move + 1

elif gameType == "observe":
    loadText = visual.TextStim(myWindow, text= "Loading...", pos=(0,0), wrapWidth=1.5, color='black')
    loadShape = visual.Rect(myWindow, size=(0.25,0.25), pos= (-1,-0.2), fillColor= 'aquamarine')

    move= 0

    while move < 80:
        loadShape.pos +=(0.03, 0.0)
        myBackground.draw()
        loadText.draw()
        loadShape.draw()
        myWindow.flip()
        core.wait(.05)
        move= move + 1
# keep track of which components have finished
introductionsComponents = []
for thisComponent in introductionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introductionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "introductions"-------
while continueRoutine:
    # get current time
    t = introductionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introductionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introductionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "introductions"-------
for thisComponent in introductionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "introductions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Game"-------
continueRoutine = True
# update component parameters for each repeat

ParticipantGame = visual.ImageStim(myWindow, pos= (0, -.5),size= (.23,.45), image= finStimDir+ Participant)
PlayerOneGame = visual.ImageStim(myWindow, pos= (-.5,.5),size= (.23,.45), image= finStimDir+PlayerOne)
PlayerTwoGame= visual.ImageStim(myWindow, pos= (.5,.5),size= (.23,.45), image= finStimDir+PlayerTwo)
#warmup
myBackground.draw()
ParticipantGame.draw()
PlayerOneGame.draw()
PlayerTwoGame.draw()
ball.draw()
myWindow.flip()


if expCond == "A" or expCond == "B" or expCond== "C" or expCond=="D" or expCond =="I" or expCond=="J" or expCond=="K" or expCond=="L":
    gameType = "play"
    throwTo=event.waitKeys(keyList=throwResp)[0]

elif expCond == "E" or expCond == "F" or expCond== "G" or expCond=="H" or expCond =="M" or expCond=="N" or expCond=="O" or expCond=="P": 
    gameType = "observe"
    throwTo= throwResp


if gameType == "observe":
    for curPoint in part2Two:
        ball.setPos(curPoint)#throw 1
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(0.5)
        numThrow += 1
#            throwball('playerTwo')
    for curPoint in two2One:
        ball.setPos(curPoint)#throw 2
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
#            throwball('playerOne')
    for curPoint in one2Part:#throw 3
        ball.setPos(curPoint)
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
#               throwball (p1)
    for curPoint in part2One:#throw 4
        ball.setPos(curPoint)
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
#               throwball (p1)
    for curPoint in one2Two:#throw 5
        ball.setPos(curPoint)
        myBackground.draw()
        PlayerOneGame.draw()
        PlayerTwoGame.draw()
        ParticipantGame.draw()
        ball.draw()
        myWindow.flip()
        core.wait(0.01)
        core.wait(.5)
        numThrow += 1
elif gameType == "play":
    while numThrow < 5:
        if throwTo == 'right':
            for curPoint in part2Two: #throw_1r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in two2One: #throw_2r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in one2Part: #throw_3r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(.5)
                numThrow += 1
        elif throwTo == 'left':
            for curPoint in part2One:#throw_1l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
            myBackground.draw()
            PlayerOneGame.draw()
            PlayerTwoGame.draw()
            ParticipantGame.draw()
            myWindow.flip()
            core.wait(.01)
            core.wait(.5)
            numThrow+=1
            for curPoint in one2Two: #throw_2l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
            myBackground.draw()
            PlayerOneGame.draw()
            PlayerTwoGame.draw()
            ParticipantGame.draw()
            myWindow.flip()
            core.wait(.01)
            core.wait(.5)
            numThrow += 1
            for curPoint in two2Part: #throw_3l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(.5)
                numThrow += 1
        throwTo2 = event.waitKeys(keyList=keyResp)[0]
        if throwTo2 == 'right':
            for curPoint in part2Two: #throw_4r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in two2One: #throw_5r
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
        elif throwTo2 == 'left':
            for curPoint in part2One:#throw_1l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow+=1
            for curPoint in one2Two: #throw_2l
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
#Exclusion piece for observed and for play
    while numThrow < 35:
        if throwTo2 == 'right':
            for curPoint in one2Two: 
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
            for curPoint in two2One:
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
        elif throwTo2 == 'left':
            for curPoint in two2One:
                    ball.setPos(curPoint)
                    myBackground.draw()
                    PlayerOneGame.draw()
                    PlayerTwoGame.draw()
                    ParticipantGame.draw()
                    ball.draw()
                    myWindow.flip()
                    core.wait(0.01)
                    core.wait(0.5)
                    numThrow += 1
            for curPoint in one2Two:
                ball.setPos(curPoint)
                myBackground.draw()
                PlayerOneGame.draw()
                PlayerTwoGame.draw()
                ParticipantGame.draw()
                ball.draw()
                myWindow.flip()
                core.wait(0.01)
                core.wait(0.5)
                numThrow += 1
# keep track of which components have finished
GameComponents = []
for thisComponent in GameComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GameClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Game"-------
while continueRoutine:
    # get current time
    t = GameClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GameClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GameComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Game"-------
for thisComponent in GameComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "Game" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "questions"-------
continueRoutine = True
# update component parameters for each repeat


if questionType==1:
    #MC
    charText = visual.TextStim(myWindow, text= "Did " + participantName + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + Participant )
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")
    #Nice
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneName +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), size= (.5,.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOne)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.7), text = "Is "+ playerOneName +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.7), text = "Is "+ playerOneName+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        scaleNotNice.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #Play
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneName + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (-.5, -.5), size= (.5,.5),image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0), size=(.23,.45), image= finStimDir + PlayerOne)
    optionThree = visual.ImageStim(myWindow, pos= (.5, -.5), size=(.5,.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneName+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneName+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #Help
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneName+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), size =(.5,.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size=(.23,.45),image= finStimDir + PlayerOnePuzzle)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneName+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #cooperate
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneName+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow, pos= (.5, 0), size= (.23,.45), image= finStimDir + PlayerOne)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

elif questionType==2:
    #MC
    charText = visual.TextStim(myWindow, text= "Did " + participantName + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + Participant )
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")
    #Play
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneName + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, -.5), image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0), size = (.23,.45), image= finStimDir + PlayerOne)
    optionThree = visual.ImageStim(myWindow, pos= (-.5, -.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneName+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneName+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #Nice
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneName +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOne)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneName +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneName+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #Cooperate
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneName+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow, pos= (.5, 0),size= (.23,.45), image= finStimDir + PlayerOne)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #Help
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneName+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them  or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size= (.23,.45), image= finStimDir + PlayerOnePuzzle)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneName+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
elif questionType==3:
    #Nice
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneName +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOne)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneName +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneName+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #play
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneName + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, -.5), image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0), size= (.23,.45),image= finStimDir + PlayerOne)
    optionThree = visual.ImageStim(myWindow, pos= (-.5, -.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneName+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneName+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #help 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneName+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces them or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3),size= (.23,.45), image= finStimDir + PlayerOnePuzzle)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneName+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #cooperate 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneName+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow, pos= (.5, 0), image= finStimDir + PlayerOne)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #MC
    charText = visual.TextStim(myWindow, text= "Did " + participantName + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + Participant )
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")
elif questionType==4:
    #play 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneName + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, -.5), image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0),size= (.23,.45), image= finStimDir + PlayerOne)
    optionThree = visual.ImageStim(myWindow, pos= (-.5, -.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneName+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneName+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #nice 
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneName +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOne)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneName +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneName+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #cooperate 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneName+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow,size= (.23,.45), pos= (.5, 0), image= finStimDir + PlayerOne)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #help 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneName+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size= (.23,.45), image= finStimDir + PlayerOnePuzzle)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneName+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #MC 
    charText = visual.TextStim(myWindow, text= "Did " + participantName + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + Participant )
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")


# keep track of which components have finished
questionsComponents = []
for thisComponent in questionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
questionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "questions"-------
while continueRoutine:
    # get current time
    t = questionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=questionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in questionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "questions"-------
for thisComponent in questionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "questions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "introductions_game2"-------
continueRoutine = True
# update component parameters for each repeat
myBackground.draw()
myWindow.flip()


storyText = visual.TextStim(myWindow, text = greeting, pos =(0, .7), wrapWidth= 1.5, color= 'black')
keyControl = visual.TextStim(myWindow, text = "Press Space to begin", wrapWidth= 1.5, color= 'black', pos = (0, -.7))

characterOne = visual.ImageStim(myWindow, pos= (-.5, .15),size= (.23,.45) ,image= finStimDir + PlayerOneTwo)
characterTwo = visual.ImageStim(myWindow, pos= (0, .15),size= (.23,.45) ,image= finStimDir +  ParticipantTwo)
characterThree= visual.ImageStim(myWindow, pos= (.5, .15),size= (.23,.45) ,image= finStimDir +  PlayerTwoTwo)
characterOneName = visual.TextStim(myWindow, text= playerOneNameTwo, pos= (-.5,-.2), color='black')
characterTwoName =visual.TextStim(myWindow, text= participantNameTwo, pos= (0,-.2), color='black')
characterThreeName = visual.TextStim(myWindow, text= playerTwoNameTwo, pos= (.5,-.2), color='black')


myBackground.draw()
storyText.draw()
keyControl.draw()
characterOne.draw()
characterTwo.draw()
characterThree.draw()
characterOneName.draw()
characterTwoName.draw()
characterThreeName.draw()
myWindow.flip()

introKeyChoices= ['space'] 
introResponse = event.waitKeys(keyList= introKeyChoices)[0]


if gameType== "play":
    gameInstr = visual.TextStim(myWindow, text= "To throw the ball left, press the left arrow key. \n\n To \
throw the ball right, press the right arrow key \n\n Press space to begin.", wrapWidth=1.5, color='black')
    myBackground.draw()
    gameInstr.draw()
    myWindow.flip()
    event.waitKeys(keyList='space')

    myBackground.draw()
    myWindow.flip()

    loadText = visual.TextStim(myWindow, text= "Loading...", pos=(0,0), wrapWidth=1.5, color='black')
    loadShape = visual.Rect(myWindow, size=(0.25,0.25), pos= (-1,-0.2), fillColor= 'aquamarine')

    move= 0

    while move < 80:
        loadShape.pos +=(0.03, 0.0)
        myBackground.draw()
        loadText.draw()
        loadShape.draw()
        myWindow.flip()
        core.wait(.05)
        move= move + 1

elif gameType == "observe":
    loadText = visual.TextStim(myWindow, text= "Loading...", pos=(0,0), wrapWidth=1.5, color='black')
    loadShape = visual.Rect(myWindow, size=(0.25,0.25), pos= (-1,-0.2), fillColor= 'aquamarine')

    move= 0

    while move < 80:
        loadShape.pos +=(0.03, 0.0)
        myBackground.draw()
        loadText.draw()
        loadShape.draw()
        myWindow.flip()
        core.wait(.05)
        move= move + 1
# keep track of which components have finished
introductions_game2Components = []
for thisComponent in introductions_game2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
introductions_game2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "introductions_game2"-------
while continueRoutine:
    # get current time
    t = introductions_game2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=introductions_game2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in introductions_game2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "introductions_game2"-------
for thisComponent in introductions_game2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "introductions_game2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "GameTwo"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
GameTwoComponents = []
for thisComponent in GameTwoComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GameTwoClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GameTwo"-------
while continueRoutine:
    # get current time
    t = GameTwoClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GameTwoClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GameTwoComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GameTwo"-------
for thisComponent in GameTwoComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "GameTwo" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "questions2"-------
continueRoutine = True
# update component parameters for each repeat

if questionType==1:
    #MC
    charText = visual.TextStim(myWindow, text= "Did " + participantNameTwo + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + ParticipantTwo)
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")

#Nice
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneNameTwo +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), size= (.5,.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOneTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.7), text = "Is "+ playerOneNameTwo +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.7), text = "Is "+ playerOneNameTwo+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        scaleNotNice.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
#Play
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneNameTwo + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (-.5, -.5), size= (.5,.5),image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0), size=(.23,.45), image= finStimDir + PlayerOneTwo)
    optionThree = visual.ImageStim(myWindow, pos= (.5, -.5), size=(.5,.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneNameTwo+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneNameTwo+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #Help
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneNameTwo+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), size =(.5,.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size=(.23,.45),image= finStimDir + PlayerOnePuzzleTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneNameTwo+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #cooperate
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneNameTwo+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, 0), size= (.23,.45), image= finStimDir + PlayerOneTwo)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

elif questionType==2:
    #MC
    charText = visual.TextStim(myWindow, text= "Did " + participantNameTwo + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + ParticipantTwo)
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")
    #Play
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneNameTwo + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, -.5), image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0), size = (.23,.45), image= finStimDir + PlayerOneTwo)
    optionThree = visual.ImageStim(myWindow, pos= (-.5, -.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneNameTwo+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneNameTwo+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #Nice
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneNameTwo +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOneTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneNameTwo +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneNameTwo+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #Cooperate
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneNameTwo+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow, pos= (.5, 0),size= (.23,.45), image= finStimDir + PlayerOneTwo)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #Help
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneNameTwo+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them  or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size= (.23,.45), image= finStimDir + PlayerOnePuzzleTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneNameTwo+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
elif questionType==3:
    #Nice
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneNameTwo +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOneTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneNameTwo +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneNameTwo+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #play
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneNameTwo + " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, -.5), image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0), size= (.23,.45),image= finStimDir + PlayerOneTwo)
    optionThree = visual.ImageStim(myWindow, pos= (-.5, -.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneNameTwo+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneNameTwo+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #help 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneNameTwo+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces them or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3),size= (.23,.45), image= finStimDir + PlayerOnePuzzleTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneNameTwo+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #cooperate 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneNameTwo+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow, pos= (.5, 0), image= finStimDir + PlayerOneTwo)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #MC
    charText = visual.TextStim(myWindow, text= "Did " + participantNameTwo+ " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + ParticipantTwo)
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")
elif questionType==4:
    #play 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! " + playerOneNameTwo+ " is going to play another game. Do you think they will let you play or not let you play?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (.5, -.5), image= finStimDir + 'Play.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,0),size= (.23,.45), image= finStimDir + PlayerOneTwo)
    optionThree = visual.ImageStim(myWindow, pos= (-.5, -.5), image= finStimDir + 'NoPlay.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    optionThree.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
        scalePlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalePlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+playerOneNameTwo+" let you play?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePlayText.draw()
        scalePlay.draw()
        optionTwo.draw()
        myWindow.flip()
        PlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = PlayScaleChoice)[0]
    elif response == 'right':
        print("play")
        scalenoPlay = visual.TextStim(myWindow, pos=(0,-.5), text = "a little bit              regular amount                a lot", wrapWidth=1.5, color='black')
        scalenoPlayText= visual.TextStim(myWindow, pos = (0,.5), text = "How much will "+ playerOneNameTwo+" not play with you?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalenoPlayText.draw()
        scalenoPlay.draw()
        optionTwo.draw()
        myWindow.flip()
        noPlayScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = noPlayScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #nice 
    charText = visual.TextStim(myWindow, text= "Is "+ playerOneNameTwo +" nice or not nice?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'NiceNotNice.png' )
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size = (.23,.45),image= finStimDir + PlayerOneTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("nice")
        scaleNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NiceScale.png')
        scaleNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneNameTwo +" a little nice, nice, or really nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNiceText.draw()
        scaleNice.draw()
        optionTwo.draw()
        myWindow.flip()
        niceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = niceScaleChoice)[0]
    elif response == 'right':
        print("not nice")
        scaleNotNice = visual.ImageStim(myWindow, pos=(0,-.5), image = finStimDir + 'NotNiceScale.png')
        scaleNotNiceText= visual.TextStim(myWindow, pos = (0,.5), text = "Is "+ playerOneNameTwo+" a little not nice, not nice, or really not nice?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scaleNotNiceText.draw()
        optionTwo.draw()
        myWindow.flip()
        notniceScaleChoice = ['left', 'up', 'right']
        responseNiceScale= event.waitKeys(keyList = notniceScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #cooperate 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "We are going to play another game. This game need two people. Do you want to work with "+ playerOneNameTwo+ " or someone else?", pos=(0,.7), wrapWidth=1.5, color='black')


    optionOne = visual.ImageStim(myWindow,size= (.23,.45), pos= (.5, 0), image= finStimDir + PlayerOneTwo)
    optionTwo = visual.ImageStim(myWindow, pos= (-.5,0), image= finStimDir + 'work_together.png')
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()

    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]

    if response == 'left':
        print("together")

    elif response == 'right':
        print("someone else")

    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)

    #help 
    myBackground.draw()
    myWindow.flip()
    charText = visual.TextStim(myWindow, text= "Oh look! "+playerOneNameTwo+" is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, -.5), image= finStimDir + 'PuzzlePieces.png')
    optionTwo = visual.ImageStim(myWindow, pos= (0,.3), size= (.23,.45), image= finStimDir + PlayerOnePuzzleTwo)
    myBackground.draw()
    optionOne.draw()
    optionTwo.draw()
    charText.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("give pieces")
        scalePuzzleGive = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleGiveText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to give "+ playerOneNameTwo+" ?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleGiveText.draw()
        scalePuzzleGive.draw()
        optionTwo.draw()
        myWindow.flip()
        GiveScaleChoice = ['left', 'up', 'right']
        responseGiveScale= event.waitKeys(keyList = GiveScaleChoice)[0]
    elif response == 'right':
        print("keep pieces")
        scalePuzzleKeep = visual.TextStim(myWindow, pos=(0,-.5), text = "1              2                3", wrapWidth=1.5, color='black')
        scalePuzzleKeepText= visual.TextStim(myWindow, pos = (0,.5), text = "How many pieces do you want to keep?", wrapWidth=1.5, color='black')
        myBackground.draw()
        scalePuzzleKeepText.draw()
        scalePuzzleKeep.draw()
        optionTwo.draw()
        myWindow.flip()
        KeepScaleChoice = ['left', 'up', 'right']
        responseKeepScale= event.waitKeys(keyList = KeepScaleChoice)[0]
    else:
        print('whoops! does not work')
    myBackground.draw()
    myWindow.flip()
    core.wait(1)
    #MC 
    charText = visual.TextStim(myWindow, text= "Did " + participantNameTwo + " get to play or have to watch?", pos=(0,.7), wrapWidth=1.5, color='black')
    optionOne = visual.ImageStim(myWindow, pos= (0, 0), size = (.23,.45), image= finStimDir + ParticipantTwo)
    chooseOne= visual.TextStim(myWindow, pos=(-.5, -.5), text= "Play", wrapWidth=1.5, color='black')
    chooseTwo= visual.TextStim(myWindow, pos=(.5, -.5), text= "Watch", wrapWidth=1.5, color='black')
    myBackground.draw()
    charText.draw()
    optionOne.draw()
    chooseOne.draw()
    chooseTwo.draw()
    myWindow.flip()
    choiceResp= ['left', 'right']
    response = event.waitKeys(keyList = choiceResp)[0]
    if response == 'left':
        print("play")
    else:
        print("watch")

# keep track of which components have finished
questions2Components = []
for thisComponent in questions2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
questions2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "questions2"-------
while continueRoutine:
    # get current time
    t = questions2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=questions2Clock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in questions2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "questions2"-------
for thisComponent in questions2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "questions2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
