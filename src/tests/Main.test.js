import  {initializeTimes, updateTimes} from '../Main';

describe('Main component', () => {
  test('initializeTimes function', () => {
    const times = initializeTimes();
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]);
  });

  test('updateTimes function', () => {
    const times = updateTimes([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ], {type: 'change_date', date: null});
    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]);
  });

});
