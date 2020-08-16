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
    ]
  $scope.plusOne =
    function(index) {
    	$scope.images[index].likes += 1;
  	}
}]);
