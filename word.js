export const getWeekends = (toWhich) => {
    let weekLong = ['saturday', 'sunday'];
    let weekShort = ['sat', 'sun'];
  
    let answer=weekLong;
    if (toWhich = 'short') ? answer=weekShort : answer=weekLong ;
    //  result += shouldBeBig ? toUpperCase(str[i]) : str[i];

    console.log(answer);
    return answer;  
    //} console.log('');
}
  getWeekends('');

/*  expect(getWeekends()).toEqual(['saturday', 'sunday']);
  expect(getWeekends('long')).toEqual(['saturday', 'sunday']);
  expect(getWeekends('short')).toEqual(['sat', 'sun']);
*/