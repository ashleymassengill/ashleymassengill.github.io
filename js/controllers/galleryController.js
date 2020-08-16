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
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/letter-sign.jpeg',
        likes: 0
      },
      {
        name: 'Surfer',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/surfer.jpeg',
        likes: 0
      },
      {
        name: 'Fire Escape',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/fire-escape.jpeg',
        likes: 0
      },
      {
        name: 'Sailboat',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/sailboat2.jpeg',
        likes: 0
      },
      {
        name: 'Mercers pier',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/mercers2.jpeg',
        likes: 0
      },
      {
        name: 'Merch Man',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/sales-guy.jpeg',
        likes: 0
      },
      {
        name: 'Alley',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/alley.jpeg',
        likes: 0
      },
      {
        name: 'Looking up at a billboard',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/billboard.jpeg',
        likes: 0
      },
      {
        name: 'Split pine in a field',
        location: 'Clayton, NC',
        date: '2006',
        file: 'images/gallery/split-pine.jpg',
        likes: 0
      },
      {
        name: 'Fountain propeller',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/propeller2.jpeg',
        likes: 0
      },
      {
        name: 'Coffee house',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/coffee.jpg',
        likes: 0
      },
      {
        name: 'Sand shelf',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/sand.jpeg',
        likes: 0
      },
      {
        name: 'Ship in silouette',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/ship2.jpeg',
        likes: 0
      },
      {
        name: 'Original tile',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/tile-entry.jpeg',
        likes: 0
      },
      {
        name: 'Troy',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/troy.jpeg',
        likes: 0
      },
      {
        name: 'Hanging vines',
        location: 'Raleigh, NC',
        date: '2011',
        file: 'images/gallery/vines-green.jpeg',
        likes: 0
      },
      {
        name: 'Ocean wave',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/wave2.jpeg',
        likes: 0
      },
      {
        name: 'Old barn',
        location: 'Clayton, NC',
        date: '2006',
        file: 'images/gallery/barn.jpg',
        likes: 0
      },
      {
        name: 'Loading equipment',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/band-load.jpeg',
        likes: 0
      },
      {
        name: 'Utility access',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/access.jpeg',
        likes: 0
      },
      {
        name: 'Grass',
        location: 'Clayton, NC',
        date: '2006',
        file: 'images/gallery/grass.jpg',
        likes: 0
      },
      {
        name: 'Ship in partial silouette',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/ship3.jpeg',
        likes: 0
      },
      {
        name: 'Band merch sales',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/sales-guys.jpeg',
        likes: 0
      },
      {
        name: 'Painted soldier',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/soldier.jpeg',
        likes: 0
      },
      {
        name: 'Trees',
        location: 'Chadbourn, NC',
        date: '2007',
        file: 'images/gallery/trees1.jpg',
        likes: 0
      },
      {
        name: 'Trash',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/trash.jpeg',
        likes: 0
      },
      {
        name: 'Boxing monkeys',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/boxers.jpeg',
        likes: 0
      },
      {
        name: 'Brandy',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/brandy.jpeg',
        likes: 0
      },
      {
        name: 'Door',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/door.jpeg',
        likes: 0
      },
      {
        name: 'Barn',
        location: 'Chadbourn, NC',
        date: '2007',
        file: 'images/gallery/barn2.jpg',
        likes: 0
      },
      {
        name: 'Guitar storage',
        location: 'Raleigh, NC',
        date: '2006',
        file: 'images/gallery/guitar-cases.jpeg',
        likes: 0
      },
      {
        name: 'Distant logs',
        location: 'Clayton, NC',
        date: '2006',
        file: 'images/gallery/logs-distant.jpg',
        likes: 0
      },
      {
        name: 'Grafiti girl',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/love-girl.jpeg',
        likes: 0
      },
      {
        name: 'Mercers pier',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/mercers1.jpeg',
        likes: 0
      },
      {
        name: 'News stand',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/news.jpeg',
        likes: 0
      },
      {
        name: 'Parking deck',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/parking-deck.jpeg',
        likes: 0
      },
      {
        name: 'Fountain propeller',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/propeller-top.jpeg',
        likes: 0
      },
      {
        name: 'Trees',
        location: 'Chadbourn, NC',
        date: '2007',
        file: 'images/gallery/trees2.jpg',
        likes: 0
      },
      {
        name: 'Sailboat',
        location: 'Chadbourn, NC',
        date: '2007',
        file: 'images/gallery/sailboat.jpg',
        likes: 0
      },
      {
        name: 'Ship in silouette',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/ship1.jpeg',
        likes: 0
      },
      {
        name: 'Painted soldier',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/soldier2.jpeg',
        likes: 0
      },
      {
        name: 'Neon vines',
        location: 'Raleigh, NC',
        date: '2007',
        file: 'images/gallery/vines-neon.jpeg',
        likes: 0
      },
      {
        name: 'Wave',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/wave.jpeg',
        likes: 0
      },
      {
        name: 'Logs',
        location: 'Clayton, NC',
        date: '2006',
        file: 'images/gallery/logs-close.jpg',
        likes: 0
      },
      {
        name: 'Mercers pier',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/mercers3.jpeg',
        likes: 0
      },
      {
        name: 'Cat',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/cat.jpeg',
        likes: 0
      },
      {
        name: 'Grafiti',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/grafiti.jpeg',
        likes: 0
      },
      {
        name: 'Dock house',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/dock-house.jpeg',
        likes: 0
      },
      {
        name: 'Fan',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/fan.jpeg',
        likes: 0
      },
      {
        name: 'Fountain propeller',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/propeller.jpeg',
        likes: 0
      },
      {
        name: 'Mercers peir',
        location: 'Wilmington, NC',
        date: '2007',
        file: 'images/gallery/mercers4.jpeg',
        likes: 0
      },
    ]
  $scope.like =
    function(index) {
    	$scope.images[index].likes += 1;
  	}
}]);
