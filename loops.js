// adds `"I am ${i} strange loop${i === 0 ? '' : 's'}."`to an array 25 times:
function forLoop(array)
{
  var j = array.length
  for(let i = 0; i < 25 + j; i++)
  {
    if(i === 1)
    {
      array[i] = `I am ${i} strange loop.`
    } 
    else 
    {
      array[i] = `I am ${i} strange loops.`
    }
  }
  
  return array
}

// counts down from n to 0:
function whileLoop(n)
{
  while(n > 0)
  {
    n--
    console.log(n)
  }
  
  return "done"
}

function maybeTrue() 
{
  return Math.random() >= 0.5
}

// removes elements from `array` until `array` is empty or until `maybeTrue()` returns `false`:
function doWhileLoop(array)
{
  do
  {
    array.pop()
  }
  while(array.length > 0 && maybeTrue());
  
  return array
}