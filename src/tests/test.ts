import Movie from '../class/movie';

test('create movie', () => {
    const result = new Movie(
        1,
        'Мстители',
        2012,
        'США',
        'Avengers Assemble',
        ['fantasic', 'action', 'fantasy', 'adventure'],
        137,
    );

    expect(result).toBeInstanceOf(Movie);
    expect(result).toEqual({
        id: 1,
        name: 'Мстители',
        year: 2012,
        country: 'США',
        slogan: 'Avengers Assemble',
        jenre: ['fantasic', 'action', 'fantasy', 'adventure'],
        durationMinutes: 137, 
    });
})

