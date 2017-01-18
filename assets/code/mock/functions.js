var myMock = jest.fn();

// How the function was called or  instantiated.

// The function was called exactly once
expect(myMock.mock.calls.length).toBe(1);

// The first arg of the first call to the function was 'first arg'
expect(myMock.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(myMock.mock.calls[0][1]).toBe('second arg');

// This function was instantiated exactly twice
expect(myMock.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(myMock.mock.instances[0].name).toEqual('test');
