import { searchUser, searchUsers } from './searchUsers';

describe('test searchUser function', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({ login: 'test' })
        }
      })
    })
  })
  
  it('shoud search one user by login', async () => {
    const { login } = await searchUser('test')
    expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/users/test')
    expect(login).toBe('test')
  });
})

describe('test searchUsers function', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: function () {
          return Promise.resolve({ items: [{ login: 'test' }, { login: 'test2' }]})
        }
      })
    })
  })

  it('shoud search many users by login', async () => {
    const expected = [{ login: 'test' }, { login: 'test2' }]
    const items = await searchUsers('test');
    expect(window.fetch).toHaveBeenCalledWith('https://api.github.com/search/users?q=test')
    expect(items).toEqual(expected)
  });
})
