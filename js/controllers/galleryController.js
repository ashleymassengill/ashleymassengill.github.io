app.controller('galleryController', ['$scope', function($scope) {
  $scope.title = 'A Photographic Exploration';
  $scope.description =
    {
      one: "In my early 20s I got my hands on a old Konica Minolta film SLR camera. One that was bought right after my birth. Camera shops and film developers still existed then, so I started discovering different types of film, playing with exposure settings, and trying to figure out if I had a talent for taking pictures.",
      two: "Some of the film was high speed black and white and I had no idea what that meant so the camera settings were on an exposure too slow for the film. Some of the film got hot in my car. Focuses were off. Or wrong. Color film wasn't my favorite thing but I played with it too.",
      three: "98% of the time my photos were crap. These are a few examples of the times they weren't. Sometimes on purpose, usually by total accident."
    }
  $scope.images =
    [
      {
        name: 'Letter Sign',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/letter-sign.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Surfer',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/surfer.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Fire Escape',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/fire-escape.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Sailboat',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/sailboat2.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Mercers pier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers2.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Merch Man',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/sales-guy.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Alley',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/alley.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Looking up at a billboard',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/billboard.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Split pine in a field',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/split-pine.jpg',
        orientation: 'portrait'
      },
      {
        name: 'Fountain propeller',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/propeller2.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Coffee house',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/coffee.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Sand shelf',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/sand.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Ship in silouette',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/ship2.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Original tile',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/tile-entry.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Troy',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/troy.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Hanging vines',
        city: 'Raleigh',
        state: 'NC',
        date: '2011',
        file: 'images/gallery/vines-green.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Ocean wave',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/wave2.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Old barn',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/barn.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Loading equipment',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/band-load.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Utility access',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/access.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Grass',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/grass.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Ship in partial silouette',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/ship3.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Band merch sales',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/sales-guys.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Painted soldier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/soldier.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Trees',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/trees1.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Trash',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/trash.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Boxing monkeys',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/boxers.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Brandy',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/brandy.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Door',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/door.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Barn',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/barn2.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Guitar storage',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/guitar-cases.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Distant logs',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/logs-distant.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Grafiti girl',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/love-girl.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Mercers pier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers1.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'News stand',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/news.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Parking deck',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/parking-deck.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Fountain propeller',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/propeller-top.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Trees',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/trees2.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Sailboat',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/sailboat.jpg',
        orientation: 'landscape'
      },
      {
        name: 'Ship in silouette',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/ship1.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Painted soldier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/soldier2.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Neon vines',
        city: 'Raleigh',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/vines-neon.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Wave',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/wave.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Logs',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/logs-close.jpg',
        orientation: 'portrait'
      },
      {
        name: 'Mercers pier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers3.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Cat',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/cat.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Grafiti',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/grafiti.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Dock house',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/dock-house.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Fan',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/fan.jpeg',
        orientation: 'landscape'
      },
      {
        name: 'Fountain propeller',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/propeller.jpeg',
        orientation: 'portrait'
      },
      {
        name: 'Mercers peir',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers4.jpeg',
        orientation: 'landscape'
      }
    ]
  $scope.like =
    function(index) {
    	$scope.images[index].likes += 1;
  	}
}]);
