import twClassnames from '../src/util/twClassnames';

describe('Functional Tests', () => {
  test('it removes classes with the same prefixes', () => {
    expect(twClassnames('p-1', 'p-2')).toEqual('p-2');
  });

  test('it keeps classes when preset is longer than custom arg', () => {
    expect(twClassnames('p-1 m-1', 'p-2')).toEqual('p-2 m-1');
  });

  test('it returns the custom array if no preset args are present', () => {
    expect(twClassnames('', 'p-1')).toEqual('p-1');
  });

  test('it returns preset if no custom arg is provided', () => {
    expect(twClassnames('p-1', '')).toEqual('p-1');
  });

  test('it keeps classes without - in the classname', () => {
    expect(
      twClassnames('border bg-red-400', 'border border-green-400')
    ).toEqual('border border-green-400 bg-red-400');
  });

  test('it returns an empty string when no args are provided', () => {
    expect(twClassnames()).toEqual('');
  });

  test('it removes the correct class when a class exists w/o a -', () => {
    expect(
      twClassnames('rounded bg-red-400 border border-gray-900', 'rounded-lg')
    ).toEqual('rounded-lg bg-red-400 border border-gray-900');
  });
});
