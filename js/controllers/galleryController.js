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
        id: 'id001',
        name: 'Letter Sign',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/letter-sign.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id002',
        name: 'Surfer',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/surfer.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id003',
        name: 'Fire Escape',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/fire-escape.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id004',
        name: 'Sailboat',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/sailboat2.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id005',
        name: 'Mercers pier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers2.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id006',
        name: 'Merch Man',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/sales-guy.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id007',
        name: 'Alley',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/alley.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id008',
        name: 'Looking up at a billboard',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/billboard.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id009',
        name: 'Split pine in a field',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/split-pine.jpg',
        orientation: 'portrait'
      },
      {
        id: 'id010',
        name: 'Fountain propeller',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/propeller2.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id011',
        name: 'Coffee house',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/coffee.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id012',
        name: 'Sand shelf',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/sand.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id013',
        name: 'Ship in silouette',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/ship2.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id014',
        name: 'Original tile',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/tile-entry.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id015',
        name: 'Troy',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/troy.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id016',
        name: 'Hanging vines',
        city: 'Raleigh',
        state: 'NC',
        date: '2011',
        file: 'images/gallery/vines-green.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id017',
        name: 'Ocean wave',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/wave2.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id018',
        name: 'Old barn',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/barn.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id019',
        name: 'Loading equipment',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/band-load.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id020',
        name: 'Utility access',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/access.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id021',
        name: 'Grass',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/grass.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id022',
        name: 'Ship in partial silouette',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/ship3.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id023',
        name: 'Band merch sales',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/sales-guys.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id024',
        name: 'Painted soldier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/soldier.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id025',
        name: 'Trees',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/trees1.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id026',
        name: 'Trash',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/trash.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id027',
        name: 'Boxing monkeys',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/boxers.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id028',
        name: 'Brandy',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/brandy.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id029',
        name: 'Door',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/door.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id030',
        name: 'Barn',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/barn2.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id031',
        name: 'Guitar storage',
        city: 'Raleigh',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/guitar-cases.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id032',
        name: 'Distant logs',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/logs-distant.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id033',
        name: 'Grafiti girl',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/love-girl.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id034',
        name: 'Mercers pier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers1.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id035',
        name: 'News stand',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/news.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id036',
        name: 'Parking deck',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/parking-deck.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id037',
        name: 'Fountain propeller',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/propeller-top.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id038',
        name: 'Trees',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/trees2.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id039',
        name: 'Sailboat',
        city: 'Chadbourn',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/sailboat.jpg',
        orientation: 'landscape'
      },
      {
        id: 'id040',
        name: 'Ship in silouette',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/ship1.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id041',
        name: 'Painted soldier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/soldier2.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id042',
        name: 'Neon vines',
        city: 'Raleigh',
        state: 'NC',
        date: '2011',
        file: 'images/gallery/vines-neon.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id043',
        name: 'Wave',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/wave.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id044',
        name: 'Logs',
        city: 'Clayton',
        state: 'NC',
        date: '2006',
        file: 'images/gallery/logs-close.jpg',
        orientation: 'portrait'
      },
      {
        id: 'id045',
        name: 'Mercers pier',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/mercers3.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id046',
        name: 'Cat',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/cat.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id047',
        name: 'Grafiti',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/grafiti.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id048',
        name: 'Dock house',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/dock-house.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id049',
        name: 'Fan',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/fan.jpeg',
        orientation: 'landscape'
      },
      {
        id: 'id050',
        name: 'Fountain propeller',
        city: 'Wilmington',
        state: 'NC',
        date: '2007',
        file: 'images/gallery/propeller.jpeg',
        orientation: 'portrait'
      },
      {
        id: 'id051',
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
