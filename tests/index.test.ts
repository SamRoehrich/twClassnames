import twClassnames from '../src/util/twClassnames';

describe('Functional Tests', () => {
  test('it removes classes with the same prefixes', () => {
    expect(twClassnames('p-1', 'p-2')).toEqual('p-2');
  });

  test('it keeps classes when preset is longer than custom arg', () => {
    expect(twClassnames('p-1 m-1', 'p-2')).toEqual('p-2 m-1');
  });

  test('it returns the custom array if no preset args are present', () => {
    expect(twClassnames('', 'p-1')).toEqual('p-1 ');
  });

  test('it returns preset if no custom arg is provided', () => {
    expect(twClassnames('p-1', '')).toEqual(' p-1');
  });

  test('it keeps classes without - in the classname', () => {
    expect(twClassnames('border bg-red-400', 'border-green-400')).toEqual(
      'border-green-400 border bg-red-400'
    );
  });
});
