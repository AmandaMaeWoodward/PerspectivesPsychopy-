/********************* 
 * Perspectives Test *
 *********************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.2.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'perspectives';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
flowScheduler.add(introductionsRoutineBegin());
flowScheduler.add(introductionsRoutineEachFrame());
flowScheduler.add(introductionsRoutineEnd());
flowScheduler.add(GameRoutineBegin());
flowScheduler.add(GameRoutineEachFrame());
flowScheduler.add(GameRoutineEnd());
flowScheduler.add(questionsRoutineBegin());
flowScheduler.add(questionsRoutineEachFrame());
flowScheduler.add(questionsRoutineEnd());
flowScheduler.add(introductions_game2RoutineBegin());
flowScheduler.add(introductions_game2RoutineEachFrame());
flowScheduler.add(introductions_game2RoutineEnd());
flowScheduler.add(GameTwoRoutineBegin());
flowScheduler.add(GameTwoRoutineEachFrame());
flowScheduler.add(GameTwoRoutineEnd());
flowScheduler.add(questions2RoutineBegin());
flowScheduler.add(questions2RoutineEachFrame());
flowScheduler.add(questions2RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.2';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var trialClock;
var myWindow;
var myBackground;
var finStimDir;
var participantBallRightPos;
var participantBallLeftPos;
var playerOneBallPos;
var playerTwoBallPos;
var AcharacterOne;
var AcharacterTwo;
var AcharacterThree;
var Apuzzlecharacter;
var BcharacterOne;
var BcharacterTwo;
var BcharacterThree;
var Bpuzzlecharacter;
var ball;
var throwResp;
var expCond;
var Participant;
var PlayerOne;
var PlayerOnePuzzle;
var PlayerTwo;
var ParticipantTwo;
var PlayerOneTwo;
var PlayeroneTwoPuzzle;
var PlayerTwoTwo;
var part2Two;
var part2One;
var one2Two;
var two2One;
var one2Part;
var two2Part;
var numThrow;
var questionType;
var introductionsClock;
var obsText;
var playText;
var gameType;
var participantName;
var playerTwoName;
var playerOneName;
var greeting;
var storyText;
var keyControl;
var characterOne;
var characterTwo;
var characterThree;
var characterOneName;
var characterTwoName;
var characterThreeName;
var introKeyChoices;
var introResponse;
var GameClock;
var questionsClock;
var introductions_game2Clock;
var GameTwoClock;
var ParticipantGame;
var PlayerOneGame;
var PlayerTwoGame;
var throwTo;
var questions2Clock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  myWindow = new visual.Window({"fullscr": true});
  myBackground = new visual.Polygon({"win": myWindow, "name": "myBackground", "edges": 4, "size": [5, 5], "pos": [0, 0], "fillColor": [1, 1, 1]});
  finStimDir = "finalStim/";
  participantBallRightPos = [0.05, (- 0.5)];
  participantBallLeftPos = [(- 0.05), (- 0.5)];
  playerOneBallPos = [(- 0.45), 0.5];
  playerTwoBallPos = [0.45, 0.5];
  AcharacterOne = "CharacterA1.png";
  AcharacterTwo = "CharacterA2.png";
  AcharacterThree = "CharacterA3.png";
  Apuzzlecharacter = "CharacterA1Puzzle.png";
  BcharacterOne = "CharacterB1.png";
  BcharacterTwo = "CharacterB2.png";
  BcharacterThree = "CharacterB3.png";
  Bpuzzlecharacter = "CharacterB1Puzzle.png";
  ball = new visual.ImageStim(myWindow, {"pos": participantBallRightPos, "size": [0.13, 0.13], "image": (finStimDir + "ball.png")});
  throwResp = ["left", "right"];
  expCond = expInfo["participant"][0];
  if (((((((((expCond === "A") || (expCond === "B")) || (expCond === "C")) || (expCond === "D")) || (expCond === "E")) || (expCond === "F")) || (expCond === "G")) || (expCond === "H"))) {
      Participant = AcharacterThree;
      PlayerOne = AcharacterTwo;
      PlayerOnePuzzle = Apuzzlecharacter;
      PlayerTwo = AcharacterOne;
      ParticipantTwo = BcharacterThree;
      PlayerOneTwo = BcharacterTwo;
      PlayeroneTwoPuzzle = Bpuzzlecharacter;
      PlayerTwoTwo = BcharacterOne;
  }
  if (((((((((expCond === "I") || (expCond === "J")) || (expCond === "K")) || (expCond === "L")) || (expCond === "M")) || (expCond === "N")) || (expCond === "O")) || (expCond === "P"))) {
      Participant = BcharacterThree;
      PlayerOne = BcharacterTwo;
      PlayerOnePuzzle = Bpuzzlecharacter;
      PlayerTwo = BcharacterOne;
      ParticipantTwo = AcharacterThree;
      PlayerOneTwo = AcharacterTwo;
      PlayeroneTwoPuzzle = Apuzzlecharacter;
      PlayerTwoTwo = AcharacterOn;
  }
  /*
  ParticipantTwo = visual.ImageStim(myWindow, pos= (0, -.5),size= (.23,.45) ,image= finStimDir + AcharacterThree)
  PlayerOneTwo = visual.ImageStim(myWindow, pos= (-.5,.5),size= (.23,.45), image=finStimDir + AcharacterTwo)
  PlayerTwoTwo = visual.ImageStim(myWindow, pos= (.5,.5),size= (.23,.45), image=finStimDir + AcharacterOne)
  Participant = visual.ImageStim(myWindow, pos= (0, -.5),size= (.23,.45) ,image= finStimDir + BcharacterThree)
  PlayerOne = visual.ImageStim(myWindow, pos= (-.5,.5),size= (.23,.45), image=finStimDir + BcharacterTwo)
  PlayerTwo = visual.ImageStim(myWindow, pos= (.5,.5),size= (.23,.45), image=finStimDir + BcharacterOne)*/
  function CalcPoints(ballx, bally, futurex, futurey, step, receive) {
      var curPoint, points, rise, run;
      if ((receive === "right")) {
          rise = ((step / Number.parseFloat(futurey)) - bally);
          run = ((step / Number.parseFloat(futurex)) - ballx);
          points = [[ballx, bally]];
          for (var i, _pj_c = 0, _pj_a = util.range(175), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
              i = _pj_a[_pj_c];
              curPoint = [(points[i][0] + step), ((points[i][1] + step) + 0.008)];
              points.push(curPoint);
          }
          return points;
      } else {
          if ((receive === "left")) {
              rise = ((step / Number.parseFloat(futurey)) - bally);
              run = ((step / Number.parseFloat(futurex)) - ballx);
              points = [[ballx, bally]];
              for (var i, _pj_c = 0, _pj_a = util.range(175), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                  i = _pj_a[_pj_c];
                  curPoint = [(points[i][0] - step), ((points[i][1] + step) + 0.008)];
                  points.push(curPoint);
              }
              return points;
          } else {
              if ((receive === "one")) {
                  rise = ((step / Number.parseFloat(futurey)) - bally);
                  run = ((step / Number.parseFloat(futurex)) - ballx);
                  points = [[ballx, bally]];
                  for (var i, _pj_c = 0, _pj_a = util.range(175), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      i = _pj_a[_pj_c];
                      curPoint = [(points[i][0] + step), points[i][1]];
                      points.push(curPoint);
                  }
                  return points;
              } else {
                  if ((receive === "two")) {
                      rise = ((step / Number.parseFloat(futurey)) - bally);
                      run = ((step / Number.parseFloat(futurex)) - ballx);
                      points = [[ballx, bally]];
                      for (var i, _pj_c = 0, _pj_a = util.range(175), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          i = _pj_a[_pj_c];
                          curPoint = [(points[i][0] - step), points[i][1]];
                          points.push(curPoint);
                      }
                      return points;
                  } else {
                      if ((receive === "pOne")) {
                          rise = ((step / Number.parseFloat(futurey)) - bally);
                          run = ((step / Number.parseFloat(futurex)) - ballx);
                          points = [[ballx, bally]];
                          for (var i, _pj_c = 0, _pj_a = util.range(75), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                              i = _pj_a[_pj_c];
                              curPoint = [(points[i][0] + step), ((points[i][1] - step) - 0.008)];
                              points.push(curPoint);
                          }
                          return points;
                      } else {
                          if ((receive === "pTwo")) {
                              rise = ((step / Number.parseFloat(futurey)) - bally);
                              run = ((step / Number.parseFloat(futurex)) - ballx);
                              points = [[ballx, bally]];
                              for (var i, _pj_c = 0, _pj_a = util.range(175), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                                  i = _pj_a[_pj_c];
                                  curPoint = [(points[i][0] - step), ((points[i][1] - step) - 0.008)];
                                  points.push(curPoint);
                              }
                              return points;
                          }
                      }
                  }
              }
          }
      }
  }
  part2Two = new CalcPoints(participantBallRightPos[0], participantBallRightPos[1], playerTwoBallPos[0], playerTwoBallPos[1], 0.005, "right");
  part2One = new CalcPoints(participantBallLeftPos[0], participantBallLeftPos[1], playerOneBallPos[0], playerOneBallPos[1], 0.005, "left");
  one2Two = new CalcPoints(playerOneBallPos[0], playerOneBallPos[1], playerTwoBallPos[0], playerTwoBallPos[1], 0.005, "one");
  two2One = new CalcPoints(playerTwoBallPos[0], playerTwoBallPos[1], playerOneBallPos[0], playerOneBallPos[1], 0.005, "two");
  one2Part = new CalcPoints(playerOneBallPos[0], playerOneBallPos[1], participantBallRightPos[0], participantBallRightPos[1], 0.005, "pOne");
  two2Part = new CalcPoints(playerTwoBallPos[0], playerTwoBallPos[1], participantBallRightPos[0], participantBallRightPos[1], 0.005, "pTwo");
  numThrow = 0;
  if (((((expCond === "A") || (expCond === "I")) || (expCond === "E")) || (expCond === "M"))) {
      questionType = 1;
  } else {
      if (((((expCond === "B") || (expCond === "F")) || (expCond === "J")) || (expCond === "N"))) {
          questionType = 2;
      } else {
          if (((((expCond === "C") || (expCond === "G")) || (expCond === "K")) || (expCond === "O"))) {
              questionType = 3;
          } else {
              if (((((expCond === "D") || (expCond === "H")) || (expCond === "L")) || (expCond === "P"))) {
                  questionType = 4;
              }
          }
      }
  }
  
  // Initialize components for Routine "introductions"
  introductionsClock = new util.Clock();
  myBackground.draw();
  myWindow.flip();
  obsText = "Hey Look! Here are some people. They're going to play catch. Let's watch!";
  playText = "Hey Look! Here are some people. We're going to play catch. Let's play!";
  if (((((((((expCond === "A") || (expCond === "a")) || (expCond === "B")) || (expCond === "b")) || (expCond === "C")) || (expCond === "c")) || (expCond === "D")) || (expCond === "d"))) {
      gameType = "observe";
      participantName = "Alex";
      playerTwoName = "Skyler";
      playerOneName = "Taylor";
      greeting = obsText;
  } else {
      if (((((((((expCond === "E") || (expCond === "e")) || (expCond === "F")) || (expCond === "f")) || (expCond === "G")) || (expCond === "g")) || (expCond === "H")) || (expCond === "h"))) {
          gameType = "play";
          playerOneName = "Morgan";
          playerTwoName = "Jordan";
          participantName = "You";
          greeting = playText;
      }
  }
  storyText = new visual.TextStim(myWindow, {"text": greeting, "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
  keyControl = new visual.TextStim(myWindow, {"text": "Press Space to begin", "wrapWidth": 1.5, "color": "black", "pos": [0, (- 0.7)]});
  characterOne = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0.15], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
  characterTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.15], "size": [0.23, 0.45], "image": (finStimDir + Participant)});
  characterThree = new visual.ImageStim(myWindow, {"pos": [0.5, 0.15], "size": [0.23, 0.45], "image": (finStimDir + PlayerTwo)});
  characterOneName = new visual.TextStim(myWindow, {"text": playerOneName, "pos": [(- 0.5), (- 0.2)], "color": "black"});
  characterTwoName = new visual.TextStim(myWindow, {"text": participantName, "pos": [0, (- 0.2)], "color": "black"});
  characterThreeName = new visual.TextStim(myWindow, {"text": playerTwoName, "pos": [0.5, (- 0.2)], "color": "black"});
  myBackground.draw();
  storyText.draw();
  keyControl.draw();
  characterOne.draw();
  characterTwo.draw();
  characterThree.draw();
  characterOneName.draw();
  characterTwoName.draw();
  characterThreeName.draw();
  myWindow.flip();
  introKeyChoices = ["space"];
  introResponse = psychoJS.eventManager.waitKeys({"keyList": introKeyChoices})[0];
  
  // Initialize components for Routine "Game"
  GameClock = new util.Clock();
  // Initialize components for Routine "questions"
  questionsClock = new util.Clock();
  // Initialize components for Routine "introductions_game2"
  introductions_game2Clock = new util.Clock();
  // Initialize components for Routine "GameTwo"
  GameTwoClock = new util.Clock();
  ParticipantGame = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "size": [0.23, 0.45], "image": (finStimDir + ParticipantTwo)});
  PlayerOneGame = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0.5], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
  PlayerTwoGame = new visual.ImageStim(myWindow, {"pos": [0.5, 0.5], "size": [0.23, 0.45], "image": (finStimDir + PlayerTwoTwo)});
  myBackground.draw();
  ParticipantGame.draw();
  PlayerOneGame.draw();
  PlayerTwoGame.draw();
  ball.draw();
  myWindow.flip();
  if (((((((((expCond === "E") || (expCond === "F")) || (expCond === "G")) || (expCond === "H")) || (expCond === "M")) || (expCond === "N")) || (expCond === "O")) || (expCond === "P"))) {
      gameType = "play";
      throwTo = psychoJS.eventManager.waitKeys({"keyList": throwResp})[0];
  } else {
      if (((((((((expCond === "A") || (expCond === "B")) || (expCond === "C")) || (expCond === "D")) || (expCond === "I")) || (expCond === "J")) || (expCond === "K")) || (expCond === "L"))) {
          gameType = "observe";
          throwTo = throwResp;
      }
  }
  if ((gameType === "observe")) {
      for (var curPoint, _pj_c = 0, _pj_a = part2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          curPoint = _pj_a[_pj_c];
          ball.setPos(curPoint);
          myBackground.draw();
          PlayerOneGame.draw();
          PlayerTwoGame.draw();
          ParticipantGame.draw();
          ball.draw();
          myWindow.flip();
          core.wait(0.01);
          core.wait(0.5);
          numThrow += 1;
      }
      for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          curPoint = _pj_a[_pj_c];
          ball.setPos(curPoint);
          myBackground.draw();
          PlayerOneGame.draw();
          PlayerTwoGame.draw();
          ParticipantGame.draw();
          ball.draw();
          myWindow.flip();
          core.wait(0.01);
          core.wait(1.5);
          numThrow += 1;
      }
      for (var curPoint, _pj_c = 0, _pj_a = one2Part, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          curPoint = _pj_a[_pj_c];
          ball.setPos(curPoint);
          myBackground.draw();
          PlayerOneGame.draw();
          PlayerTwoGame.draw();
          ParticipantGame.draw();
          ball.draw();
          myWindow.flip();
          core.wait(0.01);
          core.wait(0.5);
          numThrow += 1;
      }
      for (var curPoint, _pj_c = 0, _pj_a = part2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          curPoint = _pj_a[_pj_c];
          ball.setPos(curPoint);
          myBackground.draw();
          PlayerOneGame.draw();
          PlayerTwoGame.draw();
          ParticipantGame.draw();
          ball.draw();
          myWindow.flip();
          core.wait(0.01);
          core.wait(0.5);
          numThrow += 1;
      }
      for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
          curPoint = _pj_a[_pj_c];
          ball.setPos(curPoint);
          myBackground.draw();
          PlayerOneGame.draw();
          PlayerTwoGame.draw();
          ParticipantGame.draw();
          ball.draw();
          myWindow.flip();
          core.wait(0.01);
          core.wait(0.5);
          numThrow += 1;
      }
  } else {
      if ((gameType === "play")) {
          while ((numThrow < 5)) {
              if ((throwTo === "right")) {
                  for (var curPoint, _pj_c = 0, _pj_a = part2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
                  for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
                  for (var curPoint, _pj_c = 0, _pj_a = one2Part, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
              } else {
                  if ((throwTo === "left")) {
                      for (var curPoint, _pj_c = 0, _pj_a = part2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                      }
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(1.5);
                      numThrow += 1;
                      for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                      }
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(1.5);
                      numThrow += 1;
                      for (var curPoint, _pj_c = 0, _pj_a = two2Part, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                          core.wait(0.5);
                          numThrow += 1;
                      }
                  }
              }
              throwTo2 = psychoJS.eventManager.waitKeys({"keyList": keyResp})[0];
              if ((throwTo2 === "right")) {
                  for (var curPoint, _pj_c = 0, _pj_a = part2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
                  for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
              } else {
                  if ((throwTo2 === "left")) {
                      for (var curPoint, _pj_c = 0, _pj_a = part2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                          core.wait(0.5);
                          numThrow += 1;
                      }
                      for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                          core.wait(0.5);
                          numThrow += 1;
                      }
                  }
              }
          }
          while ((numThrow < 35)) {
              if ((throwTo2 === "right")) {
                  for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
                  for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                      curPoint = _pj_a[_pj_c];
                      ball.setPos(curPoint);
                      myBackground.draw();
                      PlayerOneGame.draw();
                      PlayerTwoGame.draw();
                      ParticipantGame.draw();
                      ball.draw();
                      myWindow.flip();
                      core.wait(0.01);
                      core.wait(0.5);
                      numThrow += 1;
                  }
              } else {
                  if ((throwTo2 === "left")) {
                      for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                          core.wait(1.5);
                          numThrow += 1;
                      }
                      for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                          curPoint = _pj_a[_pj_c];
                          ball.setPos(curPoint);
                          myBackground.draw();
                          PlayerOneGame.draw();
                          PlayerTwoGame.draw();
                          ParticipantGame.draw();
                          ball.draw();
                          myWindow.flip();
                          core.wait(0.01);
                          core.wait(0.5);
                          numThrow += 1;
                      }
                  }
              }
          }
      }
  }
  
  // Initialize components for Routine "questions2"
  questions2Clock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    trialComponents = [];
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var introductionsComponents;
function introductionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'introductions'-------
    t = 0;
    introductionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    introductionsComponents = [];
    
    for (const thisComponent of introductionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introductionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introductions'-------
    // get current time
    t = introductionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'introductions'-------
    for (const thisComponent of introductionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "introductions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var GameComponents;
function GameRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Game'-------
    t = 0;
    GameClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ParticipantGame = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "size": [0.23, 0.45], "image": (finStimDir + Participant)});
    PlayerOneGame = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0.5], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
    PlayerTwoGame = new visual.ImageStim(myWindow, {"pos": [0.5, 0.5], "size": [0.23, 0.45], "image": (finStimDir + PlayerTwo)});
    myBackground.draw();
    ParticipantGame.draw();
    PlayerOneGame.draw();
    PlayerTwoGame.draw();
    ball.draw();
    myWindow.flip();
    if (((((((((expCond === "A") || (expCond === "B")) || (expCond === "C")) || (expCond === "D")) || (expCond === "I")) || (expCond === "J")) || (expCond === "K")) || (expCond === "L"))) {
        gameType = "play";
        throwTo = psychoJS.eventManager.waitKeys({"keyList": throwResp})[0];
    } else {
        if (((((((((expCond === "E") || (expCond === "F")) || (expCond === "G")) || (expCond === "H")) || (expCond === "M")) || (expCond === "N")) || (expCond === "O")) || (expCond === "P"))) {
            gameType = "observe";
            throwTo = throwResp;
        }
    }
    if ((gameType === "observe")) {
        for (var curPoint, _pj_c = 0, _pj_a = part2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            curPoint = _pj_a[_pj_c];
            ball.setPos(curPoint);
            myBackground.draw();
            PlayerOneGame.draw();
            PlayerTwoGame.draw();
            ParticipantGame.draw();
            ball.draw();
            myWindow.flip();
            core.wait(0.01);
            core.wait(0.5);
            numThrow += 1;
        }
        for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            curPoint = _pj_a[_pj_c];
            ball.setPos(curPoint);
            myBackground.draw();
            PlayerOneGame.draw();
            PlayerTwoGame.draw();
            ParticipantGame.draw();
            ball.draw();
            myWindow.flip();
            core.wait(0.01);
            core.wait(0.5);
            numThrow += 1;
        }
        for (var curPoint, _pj_c = 0, _pj_a = one2Part, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            curPoint = _pj_a[_pj_c];
            ball.setPos(curPoint);
            myBackground.draw();
            PlayerOneGame.draw();
            PlayerTwoGame.draw();
            ParticipantGame.draw();
            ball.draw();
            myWindow.flip();
            core.wait(0.01);
            core.wait(0.5);
            numThrow += 1;
        }
        for (var curPoint, _pj_c = 0, _pj_a = part2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            curPoint = _pj_a[_pj_c];
            ball.setPos(curPoint);
            myBackground.draw();
            PlayerOneGame.draw();
            PlayerTwoGame.draw();
            ParticipantGame.draw();
            ball.draw();
            myWindow.flip();
            core.wait(0.01);
            core.wait(0.5);
            numThrow += 1;
        }
        for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            curPoint = _pj_a[_pj_c];
            ball.setPos(curPoint);
            myBackground.draw();
            PlayerOneGame.draw();
            PlayerTwoGame.draw();
            ParticipantGame.draw();
            ball.draw();
            myWindow.flip();
            core.wait(0.01);
            core.wait(0.5);
            numThrow += 1;
        }
    } else {
        if ((gameType === "play")) {
            while ((numThrow < 5)) {
                if ((throwTo === "right")) {
                    for (var curPoint, _pj_c = 0, _pj_a = part2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                    for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                    for (var curPoint, _pj_c = 0, _pj_a = one2Part, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                } else {
                    if ((throwTo === "left")) {
                        for (var curPoint, _pj_c = 0, _pj_a = part2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                        }
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                        for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                        }
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                        for (var curPoint, _pj_c = 0, _pj_a = two2Part, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                            core.wait(0.5);
                            numThrow += 1;
                        }
                    }
                }
                throwTo2 = psychoJS.eventManager.waitKeys({"keyList": keyResp})[0];
                if ((throwTo2 === "right")) {
                    for (var curPoint, _pj_c = 0, _pj_a = part2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                    for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                } else {
                    if ((throwTo2 === "left")) {
                        for (var curPoint, _pj_c = 0, _pj_a = part2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                            core.wait(0.5);
                            numThrow += 1;
                        }
                        for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                            core.wait(0.5);
                            numThrow += 1;
                        }
                    }
                }
            }
            while ((numThrow < 35)) {
                if ((throwTo2 === "right")) {
                    for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                    for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                        curPoint = _pj_a[_pj_c];
                        ball.setPos(curPoint);
                        myBackground.draw();
                        PlayerOneGame.draw();
                        PlayerTwoGame.draw();
                        ParticipantGame.draw();
                        ball.draw();
                        myWindow.flip();
                        core.wait(0.01);
                        core.wait(0.5);
                        numThrow += 1;
                    }
                } else {
                    if ((throwTo2 === "left")) {
                        for (var curPoint, _pj_c = 0, _pj_a = two2One, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                            core.wait(0.5);
                            numThrow += 1;
                        }
                        for (var curPoint, _pj_c = 0, _pj_a = one2Two, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                            curPoint = _pj_a[_pj_c];
                            ball.setPos(curPoint);
                            myBackground.draw();
                            PlayerOneGame.draw();
                            PlayerTwoGame.draw();
                            ParticipantGame.draw();
                            ball.draw();
                            myWindow.flip();
                            core.wait(0.01);
                            core.wait(0.5);
                            numThrow += 1;
                        }
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    GameComponents = [];
    
    for (const thisComponent of GameComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GameRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Game'-------
    // get current time
    t = GameClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GameComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GameRoutineEnd() {
  return async function () {
    //------Ending Routine 'Game'-------
    for (const thisComponent of GameComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Game" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var charText;
var optionOne;
var chooseOne;
var chooseTwo;
var choiceResp;
var response;
var optionTwo;
var scaleNice;
var scaleNiceText;
var niceScaleChoice;
var responseNiceScale;
var optionThree;
var scalePlay;
var scalePlayText;
var PlayScaleChoice;
var responseGiveScale;
var scalePuzzleGive;
var scalePuzzleGiveText;
var GiveScaleChoice;
var questionsComponents;
function questionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'questions'-------
    t = 0;
    questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((questionType === 1)) {
        charText = new visual.TextStim(myWindow, {"text": (("Did " + participantName) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + Participant)});
        chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
        chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
        myBackground.draw();
        charText.draw();
        optionOne.draw();
        chooseOne.draw();
        chooseTwo.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("play");
        } else {
            console.log("watch");
        }
        charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneName) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "NiceNotNice.png")});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("nice");
            scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
            scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.7], "text": (("Is " + playerOneName) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            scaleNiceText.draw();
            scaleNice.draw();
            optionTwo.draw();
            myWindow.flip();
            niceScaleChoice = ["left", "up", "right"];
            responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
        } else {
            if ((response === "right")) {
                console.log("not nice");
                scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.7], "text": (("Is " + playerOneName) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scaleNotNiceText.draw();
                scaleNotNice.draw();
                optionTwo.draw();
                myWindow.flip();
                notniceScaleChoice = ["left", "up", "right"];
                responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
        myBackground.draw();
        myWindow.flip();
        charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "Play.png")});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
        optionThree = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "NoPlay.png")});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        optionThree.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("play");
            scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
            scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            scalePlayText.draw();
            scalePlay.draw();
            optionTwo.draw();
            myWindow.flip();
            PlayScaleChoice = ["left", "up", "right"];
            responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
        } else {
            if ((response === "right")) {
                console.log("play");
                scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalenoPlayText.draw();
                scalenoPlay.draw();
                optionTwo.draw();
                myWindow.flip();
                noPlayScaleChoice = ["left", "up", "right"];
                responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
        myBackground.draw();
        myWindow.flip();
        charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "PuzzlePieces.png")});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzle)});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("give pieces");
            scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
            scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneName) + " ?"), "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            scalePuzzleGiveText.draw();
            scalePuzzleGive.draw();
            optionTwo.draw();
            myWindow.flip();
            GiveScaleChoice = ["left", "up", "right"];
            responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
        } else {
            if ((response === "right")) {
                console.log("keep pieces");
                scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalePuzzleKeepText.draw();
                scalePuzzleKeep.draw();
                optionTwo.draw();
                myWindow.flip();
                KeepScaleChoice = ["left", "up", "right"];
                responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
        myBackground.draw();
        myWindow.flip();
        charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneName) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("together");
        } else {
            if ((response === "right")) {
                console.log("someone else");
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
    } else {
        if ((questionType === 2)) {
            charText = new visual.TextStim(myWindow, {"text": (("Did " + participantName) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + Participant)});
            chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
            chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            charText.draw();
            optionOne.draw();
            chooseOne.draw();
            chooseTwo.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("play");
            } else {
                console.log("watch");
            }
            myBackground.draw();
            myWindow.flip();
            charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "image": (finStimDir + "Play.png")});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
            optionThree = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "image": (finStimDir + "NoPlay.png")});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            optionThree.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("play");
                scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalePlayText.draw();
                scalePlay.draw();
                optionTwo.draw();
                myWindow.flip();
                PlayScaleChoice = ["left", "up", "right"];
                responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
            } else {
                if ((response === "right")) {
                    console.log("play");
                    scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                    scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalenoPlayText.draw();
                    scalenoPlay.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    noPlayScaleChoice = ["left", "up", "right"];
                    responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
            charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneName) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceNotNice.png")});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("nice");
                scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
                scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneName) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scaleNiceText.draw();
                scaleNice.draw();
                optionTwo.draw();
                myWindow.flip();
                niceScaleChoice = ["left", "up", "right"];
                responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
            } else {
                if ((response === "right")) {
                    console.log("not nice");
                    scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                    scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneName) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scaleNotNiceText.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    notniceScaleChoice = ["left", "up", "right"];
                    responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
            myBackground.draw();
            myWindow.flip();
            charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneName) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("together");
            } else {
                if ((response === "right")) {
                    console.log("someone else");
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
            myBackground.draw();
            myWindow.flip();
            charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them  or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "PuzzlePieces.png")});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzle)});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("give pieces");
                scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneName) + " ?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalePuzzleGiveText.draw();
                scalePuzzleGive.draw();
                optionTwo.draw();
                myWindow.flip();
                GiveScaleChoice = ["left", "up", "right"];
                responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
            } else {
                if ((response === "right")) {
                    console.log("keep pieces");
                    scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                    scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalePuzzleKeepText.draw();
                    scalePuzzleKeep.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    KeepScaleChoice = ["left", "up", "right"];
                    responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
        } else {
            if ((questionType === 3)) {
                charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneName) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceNotNice.png")});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("nice");
                    scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
                    scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneName) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scaleNiceText.draw();
                    scaleNice.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    niceScaleChoice = ["left", "up", "right"];
                    responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
                } else {
                    if ((response === "right")) {
                        console.log("not nice");
                        scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                        scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneName) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scaleNotNiceText.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        notniceScaleChoice = ["left", "up", "right"];
                        responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                myBackground.draw();
                myWindow.flip();
                charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "image": (finStimDir + "Play.png")});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
                optionThree = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "image": (finStimDir + "NoPlay.png")});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                optionThree.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("play");
                    scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                    scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalePlayText.draw();
                    scalePlay.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    PlayScaleChoice = ["left", "up", "right"];
                    responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
                } else {
                    if ((response === "right")) {
                        console.log("play");
                        scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                        scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalenoPlayText.draw();
                        scalenoPlay.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        noPlayScaleChoice = ["left", "up", "right"];
                        responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                myBackground.draw();
                myWindow.flip();
                charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces them or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "PuzzlePieces.png")});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzle)});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("give pieces");
                    scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                    scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneName) + " ?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalePuzzleGiveText.draw();
                    scalePuzzleGive.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    GiveScaleChoice = ["left", "up", "right"];
                    responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
                } else {
                    if ((response === "right")) {
                        console.log("keep pieces");
                        scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                        scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalePuzzleKeepText.draw();
                        scalePuzzleKeep.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        KeepScaleChoice = ["left", "up", "right"];
                        responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                myBackground.draw();
                myWindow.flip();
                charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneName) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, 0], "image": (finStimDir + PlayerOne)});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("together");
                } else {
                    if ((response === "right")) {
                        console.log("someone else");
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                charText = new visual.TextStim(myWindow, {"text": (("Did " + participantName) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + Participant)});
                chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
                chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                charText.draw();
                optionOne.draw();
                chooseOne.draw();
                chooseTwo.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("play");
                } else {
                    console.log("watch");
                }
            } else {
                if ((questionType === 4)) {
                    myBackground.draw();
                    myWindow.flip();
                    charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "image": (finStimDir + "Play.png")});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
                    optionThree = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "image": (finStimDir + "NoPlay.png")});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    optionThree.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("play");
                        scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                        scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalePlayText.draw();
                        scalePlay.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        PlayScaleChoice = ["left", "up", "right"];
                        responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
                    } else {
                        if ((response === "right")) {
                            console.log("play");
                            scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                            scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneName) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                            myBackground.draw();
                            scalenoPlayText.draw();
                            scalenoPlay.draw();
                            optionTwo.draw();
                            myWindow.flip();
                            noPlayScaleChoice = ["left", "up", "right"];
                            responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneName) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceNotNice.png")});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOne)});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("nice");
                        scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
                        scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneName) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scaleNiceText.draw();
                        scaleNice.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        niceScaleChoice = ["left", "up", "right"];
                        responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
                    } else {
                        if ((response === "right")) {
                            console.log("not nice");
                            scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                            scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneName) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                            myBackground.draw();
                            scaleNotNiceText.draw();
                            optionTwo.draw();
                            myWindow.flip();
                            notniceScaleChoice = ["left", "up", "right"];
                            responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    myBackground.draw();
                    myWindow.flip();
                    charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneName) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"size": [0.23, 0.45], "pos": [0.5, 0], "image": (finStimDir + PlayerOne)});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("together");
                    } else {
                        if ((response === "right")) {
                            console.log("someone else");
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    myBackground.draw();
                    myWindow.flip();
                    charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneName) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "PuzzlePieces.png")});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzle)});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("give pieces");
                        scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                        scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneName) + " ?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalePuzzleGiveText.draw();
                        scalePuzzleGive.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        GiveScaleChoice = ["left", "up", "right"];
                        responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
                    } else {
                        if ((response === "right")) {
                            console.log("keep pieces");
                            scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                            scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                            myBackground.draw();
                            scalePuzzleKeepText.draw();
                            scalePuzzleKeep.draw();
                            optionTwo.draw();
                            myWindow.flip();
                            KeepScaleChoice = ["left", "up", "right"];
                            responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    charText = new visual.TextStim(myWindow, {"text": (("Did " + participantName) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + Participant)});
                    chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
                    chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    charText.draw();
                    optionOne.draw();
                    chooseOne.draw();
                    chooseTwo.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("play");
                    } else {
                        console.log("watch");
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    questionsComponents = [];
    
    for (const thisComponent of questionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function questionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'questions'-------
    // get current time
    t = questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of questionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'questions'-------
    for (const thisComponent of questionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gameInstr;
var loadText;
var loadShape;
var move;
var introductions_game2Components;
function introductions_game2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'introductions_game2'-------
    t = 0;
    introductions_game2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    myBackground.draw();
    myWindow.flip();
    storyText = new visual.TextStim(myWindow, {"text": greeting, "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
    keyControl = new visual.TextStim(myWindow, {"text": "Press Space to begin", "wrapWidth": 1.5, "color": "black", "pos": [0, (- 0.7)]});
    characterOne = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0.15], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
    characterTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.15], "size": [0.23, 0.45], "image": (finStimDir + ParticipantTwo)});
    characterThree = new visual.ImageStim(myWindow, {"pos": [0.5, 0.15], "size": [0.23, 0.45], "image": (finStimDir + PlayerTwoTwo)});
    characterOneName = new visual.TextStim(myWindow, {"text": playerOneNameTwo, "pos": [(- 0.5), (- 0.2)], "color": "black"});
    characterTwoName = new visual.TextStim(myWindow, {"text": participantNameTwo, "pos": [0, (- 0.2)], "color": "black"});
    characterThreeName = new visual.TextStim(myWindow, {"text": playerTwoNameTwo, "pos": [0.5, (- 0.2)], "color": "black"});
    myBackground.draw();
    storyText.draw();
    keyControl.draw();
    characterOne.draw();
    characterTwo.draw();
    characterThree.draw();
    characterOneName.draw();
    characterTwoName.draw();
    characterThreeName.draw();
    myWindow.flip();
    introKeyChoices = ["space"];
    introResponse = psychoJS.eventManager.waitKeys({"keyList": introKeyChoices})[0];
    if ((gameType === "play")) {
        gameInstr = new visual.TextStim(myWindow, {"text": "To throw the ball left, press the left arrow key. \n\n To throw the ball right, press the right arrow key \n\n Press space to begin.", "wrapWidth": 1.5, "color": "black"});
        myBackground.draw();
        gameInstr.draw();
        myWindow.flip();
        psychoJS.eventManager.waitKeys({"keyList": "space"});
        myBackground.draw();
        myWindow.flip();
        loadText = new visual.TextStim(myWindow, {"text": "Loading...", "pos": [0, 0], "wrapWidth": 1.5, "color": "black"});
        loadShape = new visual.Rect(myWindow, {"size": [0.25, 0.25], "pos": [(- 1), (- 0.2)], "fillColor": "aquamarine"});
        move = 0;
        while ((move < 80)) {
            loadShape.pos += [0.03, 0.0];
            myBackground.draw();
            loadText.draw();
            loadShape.draw();
            myWindow.flip();
            core.wait(0.05);
            move = (move + 1);
        }
    } else {
        if ((gameType === "observe")) {
            loadText = new visual.TextStim(myWindow, {"text": "Loading...", "pos": [0, 0], "wrapWidth": 1.5, "color": "black"});
            loadShape = new visual.Rect(myWindow, {"size": [0.25, 0.25], "pos": [(- 1), (- 0.2)], "fillColor": "aquamarine"});
            move = 0;
            while ((move < 80)) {
                loadShape.pos += [0.03, 0.0];
                myBackground.draw();
                loadText.draw();
                loadShape.draw();
                myWindow.flip();
                core.wait(0.05);
                move = (move + 1);
            }
        }
    }
    
    // keep track of which components have finished
    introductions_game2Components = [];
    
    for (const thisComponent of introductions_game2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function introductions_game2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'introductions_game2'-------
    // get current time
    t = introductions_game2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of introductions_game2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function introductions_game2RoutineEnd() {
  return async function () {
    //------Ending Routine 'introductions_game2'-------
    for (const thisComponent of introductions_game2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "introductions_game2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var GameTwoComponents;
function GameTwoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'GameTwo'-------
    t = 0;
    GameTwoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    GameTwoComponents = [];
    
    for (const thisComponent of GameTwoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function GameTwoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'GameTwo'-------
    // get current time
    t = GameTwoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of GameTwoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GameTwoRoutineEnd() {
  return async function () {
    //------Ending Routine 'GameTwo'-------
    for (const thisComponent of GameTwoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "GameTwo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var questions2Components;
function questions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'questions2'-------
    t = 0;
    questions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((questionType === 1)) {
        charText = new visual.TextStim(myWindow, {"text": (("Did " + participantNameTwo) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + ParticipantTwo)});
        chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
        chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
        myBackground.draw();
        charText.draw();
        optionOne.draw();
        chooseOne.draw();
        chooseTwo.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("play");
        } else {
            console.log("watch");
        }
        charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneNameTwo) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "NiceNotNice.png")});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("nice");
            scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
            scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.7], "text": (("Is " + playerOneNameTwo) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            scaleNiceText.draw();
            scaleNice.draw();
            optionTwo.draw();
            myWindow.flip();
            niceScaleChoice = ["left", "up", "right"];
            responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
        } else {
            if ((response === "right")) {
                console.log("not nice");
                scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.7], "text": (("Is " + playerOneNameTwo) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scaleNotNiceText.draw();
                scaleNotNice.draw();
                optionTwo.draw();
                myWindow.flip();
                notniceScaleChoice = ["left", "up", "right"];
                responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
        myBackground.draw();
        myWindow.flip();
        charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "Play.png")});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
        optionThree = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "NoPlay.png")});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        optionThree.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("play");
            scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
            scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            scalePlayText.draw();
            scalePlay.draw();
            optionTwo.draw();
            myWindow.flip();
            PlayScaleChoice = ["left", "up", "right"];
            responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
        } else {
            if ((response === "right")) {
                console.log("play");
                scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalenoPlayText.draw();
                scalenoPlay.draw();
                optionTwo.draw();
                myWindow.flip();
                noPlayScaleChoice = ["left", "up", "right"];
                responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
        myBackground.draw();
        myWindow.flip();
        charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "size": [0.5, 0.5], "image": (finStimDir + "PuzzlePieces.png")});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzleTwo)});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("give pieces");
            scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
            scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneNameTwo) + " ?"), "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            scalePuzzleGiveText.draw();
            scalePuzzleGive.draw();
            optionTwo.draw();
            myWindow.flip();
            GiveScaleChoice = ["left", "up", "right"];
            responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
        } else {
            if ((response === "right")) {
                console.log("keep pieces");
                scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalePuzzleKeepText.draw();
                scalePuzzleKeep.draw();
                optionTwo.draw();
                myWindow.flip();
                KeepScaleChoice = ["left", "up", "right"];
                responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
        myBackground.draw();
        myWindow.flip();
        charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneNameTwo) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
        optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
        optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
        myBackground.draw();
        optionOne.draw();
        optionTwo.draw();
        charText.draw();
        myWindow.flip();
        choiceResp = ["left", "right"];
        response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
        if ((response === "left")) {
            console.log("together");
        } else {
            if ((response === "right")) {
                console.log("someone else");
            } else {
                console.log("whoops! does not work");
            }
        }
        myBackground.draw();
        myWindow.flip();
        core.wait(1);
    } else {
        if ((questionType === 2)) {
            charText = new visual.TextStim(myWindow, {"text": (("Did " + participantNameTwo) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + ParticipantTwo)});
            chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
            chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
            myBackground.draw();
            charText.draw();
            optionOne.draw();
            chooseOne.draw();
            chooseTwo.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("play");
            } else {
                console.log("watch");
            }
            myBackground.draw();
            myWindow.flip();
            charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "image": (finStimDir + "Play.png")});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
            optionThree = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "image": (finStimDir + "NoPlay.png")});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            optionThree.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("play");
                scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalePlayText.draw();
                scalePlay.draw();
                optionTwo.draw();
                myWindow.flip();
                PlayScaleChoice = ["left", "up", "right"];
                responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
            } else {
                if ((response === "right")) {
                    console.log("play");
                    scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                    scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalenoPlayText.draw();
                    scalenoPlay.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    noPlayScaleChoice = ["left", "up", "right"];
                    responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
            charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneNameTwo) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceNotNice.png")});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("nice");
                scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
                scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneNameTwo) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scaleNiceText.draw();
                scaleNice.draw();
                optionTwo.draw();
                myWindow.flip();
                niceScaleChoice = ["left", "up", "right"];
                responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
            } else {
                if ((response === "right")) {
                    console.log("not nice");
                    scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                    scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneNameTwo) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scaleNotNiceText.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    notniceScaleChoice = ["left", "up", "right"];
                    responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
            myBackground.draw();
            myWindow.flip();
            charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneNameTwo) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("together");
            } else {
                if ((response === "right")) {
                    console.log("someone else");
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
            myBackground.draw();
            myWindow.flip();
            charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them  or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
            optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "PuzzlePieces.png")});
            optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzleTwo)});
            myBackground.draw();
            optionOne.draw();
            optionTwo.draw();
            charText.draw();
            myWindow.flip();
            choiceResp = ["left", "right"];
            response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
            if ((response === "left")) {
                console.log("give pieces");
                scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneNameTwo) + " ?"), "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                scalePuzzleGiveText.draw();
                scalePuzzleGive.draw();
                optionTwo.draw();
                myWindow.flip();
                GiveScaleChoice = ["left", "up", "right"];
                responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
            } else {
                if ((response === "right")) {
                    console.log("keep pieces");
                    scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                    scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalePuzzleKeepText.draw();
                    scalePuzzleKeep.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    KeepScaleChoice = ["left", "up", "right"];
                    responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
                } else {
                    console.log("whoops! does not work");
                }
            }
            myBackground.draw();
            myWindow.flip();
            core.wait(1);
        } else {
            if ((questionType === 3)) {
                charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneNameTwo) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceNotNice.png")});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("nice");
                    scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
                    scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneNameTwo) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scaleNiceText.draw();
                    scaleNice.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    niceScaleChoice = ["left", "up", "right"];
                    responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
                } else {
                    if ((response === "right")) {
                        console.log("not nice");
                        scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                        scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneNameTwo) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scaleNotNiceText.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        notniceScaleChoice = ["left", "up", "right"];
                        responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                myBackground.draw();
                myWindow.flip();
                charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "image": (finStimDir + "Play.png")});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
                optionThree = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "image": (finStimDir + "NoPlay.png")});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                optionThree.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("play");
                    scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                    scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalePlayText.draw();
                    scalePlay.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    PlayScaleChoice = ["left", "up", "right"];
                    responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
                } else {
                    if ((response === "right")) {
                        console.log("play");
                        scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                        scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalenoPlayText.draw();
                        scalenoPlay.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        noPlayScaleChoice = ["left", "up", "right"];
                        responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                myBackground.draw();
                myWindow.flip();
                charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces them or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "PuzzlePieces.png")});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzleTwo)});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("give pieces");
                    scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                    scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneNameTwo) + " ?"), "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    scalePuzzleGiveText.draw();
                    scalePuzzleGive.draw();
                    optionTwo.draw();
                    myWindow.flip();
                    GiveScaleChoice = ["left", "up", "right"];
                    responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
                } else {
                    if ((response === "right")) {
                        console.log("keep pieces");
                        scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                        scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalePuzzleKeepText.draw();
                        scalePuzzleKeep.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        KeepScaleChoice = ["left", "up", "right"];
                        responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                myBackground.draw();
                myWindow.flip();
                charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneNameTwo) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, 0], "image": (finStimDir + PlayerOneTwo)});
                optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
                myBackground.draw();
                optionOne.draw();
                optionTwo.draw();
                charText.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("together");
                } else {
                    if ((response === "right")) {
                        console.log("someone else");
                    } else {
                        console.log("whoops! does not work");
                    }
                }
                myBackground.draw();
                myWindow.flip();
                core.wait(1);
                charText = new visual.TextStim(myWindow, {"text": (("Did " + participantNameTwo) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + ParticipantTwo)});
                chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
                chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
                myBackground.draw();
                charText.draw();
                optionOne.draw();
                chooseOne.draw();
                chooseTwo.draw();
                myWindow.flip();
                choiceResp = ["left", "right"];
                response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                if ((response === "left")) {
                    console.log("play");
                } else {
                    console.log("watch");
                }
            } else {
                if ((questionType === 4)) {
                    myBackground.draw();
                    myWindow.flip();
                    charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is going to play another game. Do you think they will let you play or not let you play?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0.5, (- 0.5)], "image": (finStimDir + "Play.png")});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
                    optionThree = new visual.ImageStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "image": (finStimDir + "NoPlay.png")});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    optionThree.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("play");
                        scalePlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                        scalePlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " let you play?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalePlayText.draw();
                        scalePlay.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        PlayScaleChoice = ["left", "up", "right"];
                        responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": PlayScaleChoice})[0];
                    } else {
                        if ((response === "right")) {
                            console.log("play");
                            scalenoPlay = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "a little bit              regular amount                a lot", "wrapWidth": 1.5, "color": "black"});
                            scalenoPlayText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How much will " + playerOneNameTwo) + " not play with you?"), "wrapWidth": 1.5, "color": "black"});
                            myBackground.draw();
                            scalenoPlayText.draw();
                            scalenoPlay.draw();
                            optionTwo.draw();
                            myWindow.flip();
                            noPlayScaleChoice = ["left", "up", "right"];
                            responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": noPlayScaleChoice})[0];
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    charText = new visual.TextStim(myWindow, {"text": (("Is " + playerOneNameTwo) + " nice or not nice?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceNotNice.png")});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOneTwo)});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("nice");
                        scaleNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NiceScale.png")});
                        scaleNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneNameTwo) + " a little nice, nice, or really nice?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scaleNiceText.draw();
                        scaleNice.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        niceScaleChoice = ["left", "up", "right"];
                        responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": niceScaleChoice})[0];
                    } else {
                        if ((response === "right")) {
                            console.log("not nice");
                            scaleNotNice = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "NotNiceScale.png")});
                            scaleNotNiceText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("Is " + playerOneNameTwo) + " a little not nice, not nice, or really not nice?"), "wrapWidth": 1.5, "color": "black"});
                            myBackground.draw();
                            scaleNotNiceText.draw();
                            optionTwo.draw();
                            myWindow.flip();
                            notniceScaleChoice = ["left", "up", "right"];
                            responseNiceScale = psychoJS.eventManager.waitKeys({"keyList": notniceScaleChoice})[0];
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    myBackground.draw();
                    myWindow.flip();
                    charText = new visual.TextStim(myWindow, {"text": (("We are going to play another game. This game need two people. Do you want to work with " + playerOneNameTwo) + " or someone else?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"size": [0.23, 0.45], "pos": [0.5, 0], "image": (finStimDir + PlayerOneTwo)});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [(- 0.5), 0], "image": (finStimDir + "work_together.png")});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("together");
                    } else {
                        if ((response === "right")) {
                            console.log("someone else");
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    myBackground.draw();
                    myWindow.flip();
                    charText = new visual.TextStim(myWindow, {"text": (("Oh look! " + playerOneNameTwo) + " is working to complete a puzzle. It looks like they are missing some pieces. Here are some pieces. Do you want to send any of the pieces to them or keep them?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0, (- 0.5)], "image": (finStimDir + "PuzzlePieces.png")});
                    optionTwo = new visual.ImageStim(myWindow, {"pos": [0, 0.3], "size": [0.23, 0.45], "image": (finStimDir + PlayerOnePuzzleTwo)});
                    myBackground.draw();
                    optionOne.draw();
                    optionTwo.draw();
                    charText.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("give pieces");
                        scalePuzzleGive = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                        scalePuzzleGiveText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": (("How many pieces do you want to give " + playerOneNameTwo) + " ?"), "wrapWidth": 1.5, "color": "black"});
                        myBackground.draw();
                        scalePuzzleGiveText.draw();
                        scalePuzzleGive.draw();
                        optionTwo.draw();
                        myWindow.flip();
                        GiveScaleChoice = ["left", "up", "right"];
                        responseGiveScale = psychoJS.eventManager.waitKeys({"keyList": GiveScaleChoice})[0];
                    } else {
                        if ((response === "right")) {
                            console.log("keep pieces");
                            scalePuzzleKeep = new visual.TextStim(myWindow, {"pos": [0, (- 0.5)], "text": "1              2                3", "wrapWidth": 1.5, "color": "black"});
                            scalePuzzleKeepText = new visual.TextStim(myWindow, {"pos": [0, 0.5], "text": "How many pieces do you want to keep?", "wrapWidth": 1.5, "color": "black"});
                            myBackground.draw();
                            scalePuzzleKeepText.draw();
                            scalePuzzleKeep.draw();
                            optionTwo.draw();
                            myWindow.flip();
                            KeepScaleChoice = ["left", "up", "right"];
                            responseKeepScale = psychoJS.eventManager.waitKeys({"keyList": KeepScaleChoice})[0];
                        } else {
                            console.log("whoops! does not work");
                        }
                    }
                    myBackground.draw();
                    myWindow.flip();
                    core.wait(1);
                    charText = new visual.TextStim(myWindow, {"text": (("Did " + participantNameTwo) + " get to play or have to watch?"), "pos": [0, 0.7], "wrapWidth": 1.5, "color": "black"});
                    optionOne = new visual.ImageStim(myWindow, {"pos": [0, 0], "size": [0.23, 0.45], "image": (finStimDir + ParticipantTwo)});
                    chooseOne = new visual.TextStim(myWindow, {"pos": [(- 0.5), (- 0.5)], "text": "Play", "wrapWidth": 1.5, "color": "black"});
                    chooseTwo = new visual.TextStim(myWindow, {"pos": [0.5, (- 0.5)], "text": "Watch", "wrapWidth": 1.5, "color": "black"});
                    myBackground.draw();
                    charText.draw();
                    optionOne.draw();
                    chooseOne.draw();
                    chooseTwo.draw();
                    myWindow.flip();
                    choiceResp = ["left", "right"];
                    response = psychoJS.eventManager.waitKeys({"keyList": choiceResp})[0];
                    if ((response === "left")) {
                        console.log("play");
                    } else {
                        console.log("watch");
                    }
                }
            }
        }
    }
    
    // keep track of which components have finished
    questions2Components = [];
    
    for (const thisComponent of questions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function questions2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'questions2'-------
    // get current time
    t = questions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of questions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function questions2RoutineEnd() {
  return async function () {
    //------Ending Routine 'questions2'-------
    for (const thisComponent of questions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "questions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
