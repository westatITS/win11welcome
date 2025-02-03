function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6mK4M0Pbb4o":
        Script1();
        break;
      case "6GogZt0qM3l":
        Script2();
        break;
      case "5X1XxKDWFNU":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5qqfB2qw5SB');
const duration = 3000;
const easing = 'ease-out';
const id = '63vSwSjzblV';
const teeterAmount = 10;
const signs = ['-', '', '-'];

const delay = 0;
addToTimeline(
target.animate([
{ rotate: '0deg' },
{ rotate: `${signs[0] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[1] + teeterAmount}deg` },
{ rotate: '0deg' },
{ rotate: `${signs[2] + teeterAmount}deg` },
{ rotate: '0deg' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5qqfB2qw5SB');
const duration = 1000;
const easing = 'ease-out';
const id = '6SpYn0aipKX';
const shakeAmount = 2;
player.addForTriggers(
id,
target.animate([
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `${shakeAmount}px 0` },
{ translate: '0 0' },
{ translate: `-${shakeAmount}px 0` },
{ translate: '0 0' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5qqfB2qw5SB');
const duration = 750;
const easing = 'ease-out';
const id = '6jKNNjvEuIt';
const growAmount = 0.3;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
