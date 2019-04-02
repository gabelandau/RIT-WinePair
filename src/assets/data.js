let food = {
  title: 'Let\'s start with your main ingredient...',
  level: 1,
  items: [
    {
      item: 'Meat',
      level: 2,
      next: {
        title: 'Meat! Ok, now pick your protein...',
        items: [
          {
            item: 'Steak',
            level: 3,
            next: {
              title: 'How heavy do you like your wine?',
              items: [
                {
                  item: 'Medium Bodied',
                  level: 4,
                  result: {
                    grape: 'Pinot Noir',
                    reason: 'A semi-dry, medium bodied pinot noir will pair well with the beefy and savory flavor of the steak.' 
                  }
                },
                {
                  item: 'Full Bodied',
                  level: 4,
                  result: {
                    grape: 'Cabernet Sauvignon',
                    reason: 'A dry and tannic wine, the full-bodied cabernet sauvignon will cut through the beefy fat of a steak.'
                  }
                }
              ]
            }
          },
          {
            item: 'Burger',
            level: 3,
            next: {
              title: 'How dry do you dress your burger?',
              items: [
                {
                  item: 'Simple Condiments',
                  level: 4,
                  result: {
                    grape: 'Merlot',
                    reason: 'Deep cherry flavors and good acidity and tannin pairs well with a simply dressed burger.' 
                  }
                },
                {
                  item: 'Lots of Savory, Flavorful Toppings',
                  level: 4,
                  result: {
                    grape: 'Malbec',
                    reason: 'A nice oaked, deep fruit flavored, malbec will pair well with grilled onions, blue cheese, etc. '
                  }
                }
              ]
            }
          },
          {
            item: 'Chicken',
            level: 3,
            next: {
              title: 'How are you preparing the chicken?',
              items: [
                {
                  item: 'Simple Seasoning - Grilled, Pan-Seared, etc.',
                  level: 4,
                  result: {
                    grape: 'Chardonnay',
                    reason: 'The charred, smokey flavors coming from the grill or pan will pair well with a slightly oaked, full-boded chardonnay.' 
                  }
                },
                {
                  item: 'Barbecue Sauce',
                  level: 4,
                  result: {
                    grape: 'Zinfandel',
                    reason: 'The berry flavors and sweetness from a zinfandel will pair nicely with the flavors of a good BBQ sauce.'
                  }
                },
                {
                  item: 'Herbs - Rosemary, Thyme, etc.',
                  level: 4,
                  result: {
                    grape: 'Grenache',
                    reason: 'A Spanish, spicy wine that pairs well with herbed meats.'
                  }
                }
              ]
            }
          },
          {
            item: 'Pork or Sausage',
            level: 3,
            next: {
              title: 'How are you preparing the pork or sausage?',
              items: [
                {
                  item: 'Ham or Bacon',
                  level: 4,
                  result: {
                    grape: 'Riesling',
                    reason: 'The fruit and acidity in off-dry German Rieslings balance the smoke and salt in ham and bacon.' 
                  }
                },
                {
                  item: 'Spicy Pork',
                  level: 4,
                  result: {
                    grape: 'Gewürztraminer',
                    reason: 'The spice and light sweetness of Gewürztraminer will flatter similar flavors in spicy pork dishes.'
                  }
                },
                {
                  item: 'Herbed Pork',
                  level: 4,
                  result: {
                    grape: 'Chardonnay',
                    reason: 'A creamy Chardonnay with notes of apple, citrus and oak will pair well with and won’t overwhelm the mild herbal flavors in roasts or braises.'
                  }
                }
              ]
            }
          },
          {
            item: 'Other Red Meat',
            level: 3,
            next: {
              title: 'What type of red meat are you preparing',
              items: [
                {
                  item: 'Lean',
                  level: 4,
                  result: {
                    grape: 'Pinot Noir',
                    reason: 'The acidity of the Pinot Noir cuts through the delicate texture of rare or lean meats.' 
                  }
                },
                {
                  item: 'Fatty',
                  level: 4,
                  result: {
                    grape: 'Shirah/Shiraz',
                    reason: 'The high tannin in Shirah/Shiraz act as a palate cleansing astringent with fatty cuts of meat.'
                  }
                }
              ]
            }
          },
          {
            item: 'Other White Meat',
            level: 3,
            next: {
              title: 'How are you preparing the white meat?',
              items: [
                {
                  item: 'Barbecue',
                  level: 4,
                  result: {
                    grape: 'Zinfandel',
                    reason: 'The rich redness of Zinfandel helps compliment the smokey flavors of BBQ.' 
                  }
                },
                {
                  item: 'Fried',
                  level: 4,
                  result: {
                    grape: 'Champagne or Sparkling',
                    reason: 'The bubbles in Champagne/Sparkling wine help to cleanse the palate between bites of more intense fried foods.'
                  }
                },
                {
                  item: 'Roast',
                  level: 4,
                  result: {
                    grape: 'Chardonnay',
                    reason: 'A rich Chardonnay pairs well with the tender meat and intense flavor of roasted white meat.'
                  }
                }
              ]
            }
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
            level: 3,
            next: {
              title: 'How are you preparing the salmon?',
              items: [
                {
                  item: 'Smoked',
                  level: 4,
                  result: {
                    grape: 'Rosé',
                    reason: 'A sparkling or bold rosé will add acidity and a burst of flavor to the bold salty-fish notes of the smoked salmon.' 
                  }
                },
                {
                  item: 'Roasted with Cream Sauce',
                  level: 4,
                  result: {
                    grape: 'Chardonnay',
                    reason: 'The richness of the Chardonnay enhances the creaminess of the sauce and the texture of the roasted salmon.'
                  }
                },
                {
                  item: 'Plain',
                  level: 4,
                  result: {
                    grape: 'Chardonnay',
                    reason: 'A rich Chardonnay complements the soft and delicate salmon for a well-rounded experience.'
                  }
                }
              ]
            }
          },
          {
            item: 'Tuna',
            level: 3,
            next: {
              title: 'How are you preparing the tuna?',
              items: [
                {
                  item: 'Seared',
                  level: 4,
                  result: {
                    grape: 'Rosé',
                    reason: 'The taste of a strong and dry Rosé adapts well to the meaty fish flavor of tuna.' 
                  }
                },
                {
                  item: 'Raw or Near-Raw',
                  level: 4,
                  result: {
                    grape: 'Chablis',
                    reason: 'Chablis pairs well with the touch of sweetness often experienced with raw or near-raw Japanese tuna dishes.'
                  }
                },
                {
                  item: 'Glazed',
                  level: 4,
                  result: {
                    grape: 'Chardonnay',
                    reason: 'A light-bodied Pinot Noir will have its fruitiness accentuated with the citrus glazes usually used with tuna.'
                  }
                }
              ]
            }
          },
          {
            item: 'Other light, white fish',
            level: 3,
            next: {
              title: 'How heavy do you like your wine?',
              items: [
                {
                  item: 'Light Bodied',
                  level: 4,
                  result: {
                    grape: 'Pinot Grigio',
                    reason: 'A zesty and refreshing Pinot Grigio complements and balances the delicate fish flavor.' 
                  }
                },
                {
                  item: 'Medium Bodied',
                  level: 4,
                  result: {
                    grape: 'Chenin Blanc',
                    reason: 'A slightly rich and medium-bodied Chenin Blanc pairs well with both lighter fish, and fish with a firmer and thicker texture.'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      item: 'Pasta',
      level: 2,
      next: {
        title: 'What type of pasta?',
        items: [
          {
            item: 'Tomato-based Sauce',
            level: 3,
            result: {
              grape: 'Zinfandel',
              reason: 'A tart and medium-bodied Zinfandel pairs well with powerful and high-acid tomato-based sauces.' 
            }
          },
          {
            item: 'Cheese-based Sauce',
            level: 3,
            result: {
              grape: 'Trebbiano',
              reason: 'The creaminess of Trebbiano creates a congruent pairing and highlights the creaminess in the cheese.'
            }
          },
          {
            item: 'Seafood Pasta',
            level: 3,
            result: {
              grape: 'Verdicchio',
              reason: 'A lean, acidity-driven Verdicchio add a sense of refreshing bitterness to seafood and pasta dishes.'
            }
          }
        ]
      }
    },
    {
      item: 'Pizza',
      level: 2,
      next: {
        title: 'What type of pizza?',
        items: [
          {
            item: 'Cheese Pizza',
            level: 3,
            result: {
              grape: 'Grenache, Syrah and Mourvèdre (GSM)',
              reason: 'The GSM blend of grapes pairs well with cheese pizza, as the red sauce becomes the focal point due to its acidity and intense flavor.' 
            }
          },
          {
            item: 'Pepperoni Pizza',
            level: 3,
            result: {
              grape: 'Sangiovese',
              reason: 'Sangiovese is a strong grape with intense flavors that help to balance the strong, heavy meat and spice flavor of the pepperoni.'
            }
          },
          {
            item: 'Margherita Pizza',
            level: 3,
            result: {
              grape: 'Rosé',
              reason: 'The aromatic notes of fresh basil and the use of other lightly flavored fresh ingredients in margherita pizzas pairs well with a dry Rosé.'
            }
          }
        ]
      }
    },
    {
      item: 'Vegetarian',
      level: 2,
      next: {
        title: 'What type of vegetarian dish?',
        items: [
          {
            item: 'Veggie Wraps & Sandwiches',
            level: 3,
            result: {
              grape: 'Pinot Grigio',
              reason: 'A refreshing Pinot Grigio pairs well with the lightness of vegetable-based dishes.' 
            }
          },
          {
            item: 'Starchy, Potato or Rice-based Dishes',
            level: 3,
            result: {
              grape: 'Chardonnay',
              reason: 'A rich Chardonnay pairs well with heavier, starch-based dishes.'
            }
          },
          {
            item: 'Asian or Mexican Dishes',
            level: 3,
            result: {
              grape: 'Riesling',
              reason: 'The fruit and acidity in Riesling pairs well with spicy Asian and Mexican vegetable dishes. '
            }
          }
        ]
      }
    }
  ]
}

let wine = {
  title: 'Let\'s start with the type of your wine...',
  level: 1,
  items: [
    {
      item: 'Red',
      level: 2,
      next: {
        title: 'How heavy do you like your wine?',
        items: [
          {
            item: 'Light Bodied',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Grenache',
                  level: 4,
                  result: {
                    grape: 'Cheese Pizza',
                    reason: 'The Grenache and the GSM blend of grapes pairs well with cheese pizza, as the red sauce becomes the focal point due to its acidity and intense flavor.' 
                  }
                },
                {
                  item: 'Pinot Noir',
                  level: 4,
                  result: {
                    grape: 'Lean, Red Meat',
                    reason: 'The acidity of the Pinot Noir cuts through the delicate texture of rare or lean meats.'
                  }
                }
              ]
            }
          },
          {
            item: 'Medium Bodied',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Zinfandel',
                  level: 4,
                  result: {
                    grape: 'Tomato-based Pasta',
                    reason: 'The tart and medium-bodied Zinfandel pairs well with powerful and high-acid tomato-based sauces.' 
                  }
                },
                {
                  item: 'Sangiovese',
                  level: 4,
                  result: {
                    grape: 'Pepperoni Pizza',
                    reason: 'Sangiovese is a strong grape with intense flavors that help to balance the strong, heavy meat and spice flavor of the pepperoni.'
                  }
                }
              ]
            }
          },
          {
            item: 'Full Bodied',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Shiraz',
                  level: 4,
                  result: {
                    grape: 'Fatty, Red Meats',
                    reason: 'The high tannin in Shirah/Shiraz act as a palate cleansing astringent with fatty cuts of meat.' 
                  }
                },
                {
                  item: 'Bordeaux',
                  level: 4,
                  result: {
                    grape: 'White, Light Fish',
                    reason: 'A full-bodied Bordeaux wine pairs well with and won’t overwhelm the mild herbal flavors in roasts or braises.'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      item: 'White',
      level: 2,
      next: {
        title: 'How heavy do you like your wine?',
        items: [
          {
            item: 'Light Bodied',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Riesling',
                  level: 4,
                  result: {
                    grape: 'Asian and Mexican Dishes',
                    reason: 'The fruit and acidity in Riesling pairs well with spicy Asian and Mexican vegetable dishes.' 
                  }
                },
                {
                  item: 'Chenin Blanc',
                  level: 4,
                  result: {
                    grape: 'White, Light Fish',
                    reason: 'A slightly rich and medium-bodied Chenin Blanc pairs well with both lighter fish, and fish with a firmer and thicker texture. '
                  }
                }
              ]
            }
          },
          {
            item: 'Medium Bodied',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Gewürztraminer',
                  level: 4,
                  result: {
                    grape: 'Spicy Pork',
                    reason: 'The spice and light sweetness of Gewürztraminer will flatter similar flavors in spicy pork dishes.' 
                  }
                },
                {
                  item: 'Pinot Grigio',
                  level: 4,
                  result: {
                    grape: 'Veggie Wraps or Sandwiches',
                    reason: 'A refreshing Pinot Grigio pairs well with the lightness of vegetable-based dishes.'
                  }
                }
              ]
            }
          },
          {
            item: 'Full Bodied',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Zinfandel',
                  level: 4,
                  result: {
                    grape: 'Barbecue',
                    reason: 'The rich redness of Zinfandel helps compliment the smokey flavors of BBQ.' 
                  }
                },
                {
                  item: 'Chardonnay',
                  level: 4,
                  result: {
                    grape: 'Salmon with Cream Sauce',
                    reason: 'The richness of the Chardonnay enhances the creaminess of the sauce and the texture of the roasted salmon.'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      item: 'Sparkling',
      level: 2,
      next: {
        title: 'White or red?',
        items: [
          {
            item: 'White',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Asti',
                  level: 4,
                  result: {
                    grape: 'Dry Pastries or Cookies',
                    reason: 'The natural sweetness of Asti complements drier desserts without adding overwhelming sweetness to the meal.' 
                  }
                },
                {
                  item: 'Cava',
                  level: 4,
                  result: {
                    grape: 'Fried Foods',
                    reason: 'The bubbles in Cava help to cleanse the palate between bites of more intense fried foods.'
                  }
                }
              ]
            }
          },
          {
            item: 'Red',
            level: 3,
            next: {
              title: 'Pick a wine.',
              items: [
                {
                  item: 'Brachetto',
                  level: 4,
                  result: {
                    grape: 'Tuna',
                    reason: 'The taste of a sweet Brachetto adapts well to the meaty fish flavor of tuna.' 
                  }
                },
                {
                  item: 'Sparkling Shiraz',
                  level: 4,
                  result: {
                    grape: 'Barbecue',
                    reason: 'The rich redness and bubbles of Sparkling Shiraz helps compliment the smokey and tangy flavors of BBQ.'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}

export default { food, wine }