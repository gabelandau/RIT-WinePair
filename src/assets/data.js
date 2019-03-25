let food = {
  title: 'Let\'s start with your main ingredient...',
  level: 1,
  items: [
    {
      item: 'Meat',
      level: 2,
      next: {
        title: 'Pick your protein...',
        items: [
          {
            item: 'Steak or Beef',
            level: 3,
            next: {
              title: 'How dry do you like your wine?',
              items: [
                {
                  item: 'A little dry',
                  level: 4
                },
                {
                  item: 'Very dry',
                  level: 4
                }
              ]
            }
          },
          {
            item: 'Chicken',
            level: 3
          },
          {
            item: 'Pork or Sausage',
            level: 3
          }
        ]
      }
    },
    {
      item: 'Fish',
      level: 2,
      next: {
        title: 'Pick your fish...',
        items: [
          {
            item: 'Salmon',
            level: 3
          },
          {
            item: 'Tuna',
            level: 3
          },
          {
            item: 'Other light, white fish',
            level: 3
          }
        ]
      }
    },
    {
      item: 'Pasta',
      level: 2
    },
    {
      item: 'Pizza',
      level: 2
    },
    {
      item: 'Vegetarian',
      level: 2
    }
  ]
}

let wine = {
  title: 'Let\'s start with the type of your wine...',
  level: 1,
  items: [
    {
      item: 'Red',
      level: 2
    },
    {
      item: 'White',
      level: 2
    },
    {
      item: 'Sparkling',
      level: 2
    },
    {
      item: 'Fruit',
      level: 2
    }
  ]
}

export default { food, wine }