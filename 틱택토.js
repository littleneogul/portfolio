var body = document.body;
var table = document.createElement('table');
var lines = [];
var blocks = [];
var turn = 'X';
var result = document.createElement('div');

var callback = function(Event)
{

  var mLines = lines.indexOf(Event.target.parentNode);
  console.log('mLines', mLines);

  var mBlock = blocks[mLines].indexOf(Event.target);
  console.log('mBlock', mBlock);

  if(blocks[mLines][mBlock].textContent != '')
  {
    console.log('빈칸이 아닙니다.');
  }
  else
  {
    console.log('빈칸입니다.');
    blocks[mLines][mBlock].textContent = turn;

    var allTrue = false;

    if(blocks[0][0].textContent != '' &&
       blocks[0][1].textContent != '' &&
       blocks[0][2].textContent != '' &&
       blocks[1][0].textContent != '' &&
       blocks[1][1].textContent != '' &&
       blocks[1][2].textContent != '' &&
       blocks[2][0].textContent != '' &&
       blocks[2][1].textContent != '' &&
       blocks[2][2].textContent != '')
       {
         result.textContent = '무승부';
         console.log('무승부');
         turn = 'X';
         blocks.forEach(function (line)
         {
           line.forEach(function(block)
           {
             block.textContent='';
           });
         });
       }

    if(blocks[mLines][0].textContent === turn &&
       blocks[mLines][1].textContent === turn &&
       blocks[mLines][2].textContent === turn)
       {
         allTrue = true;
       }

    if(blocks[0][mBlock].textContent === turn &&
       blocks[1][mBlock].textContent === turn &&
       blocks[2][mBlock].textContent === turn)
       {
         allTrue = true;
       }


    if(mLines - mBlock === 0)
    {
      if(blocks[0][0].textContent === turn &&
         blocks[1][1].textContent === turn &&
         blocks[2][2].textContent === turn)
        {
          allTrue = true;
        }
    }

    if(Math.abs(mLines - mBlock) === 2)
    {
      if(blocks[0][2].textContent === turn &&
         blocks[1][1].textContent === turn &&
         blocks[2][0].textContent === turn)
         {
           allTrue = true;
         }
    }

    if(allTrue)
    {
      result.textContent = turn + '의 승리';
      console.log(turn + '의 승리');
      turn = 'X';
      blocks.forEach(function (line)
      {
        line.forEach(function(block)
        {
          block.textContent='';
        });
      });
    }
    else
    {
      if(turn === 'X')
      {
        turn = 'O';
      }
      else
      {
        turn = 'X';
      }
    }
  }
};

for (var i = 1; i <= 3; i += 1)
{
   var line = document.createElement('tr');
   lines.push(line);
   blocks.push([]);

   for(var j = 1; j <= 3; j += 1)
   {
     var block = document.createElement('td');
     block.addEventListener('click', callback);
     blocks[i - 1].push(block);
     line.appendChild(block);
   }

   table.appendChild(line);
}

body.appendChild(table);
body.appendChild(result);
console.log('lines', lines, 'blocks', blocks);
