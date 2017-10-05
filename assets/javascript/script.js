	<script type="text/javascript">
	$(document).ready(function() {
		
		var random = Math.floor(Math.random() * 101) + 19;
		console.log(random) 
		$('#random-number').html('<h1>Your Goal this round is to collect a total of:<h2>' + random)

		var ruby = Math.floor(Math.random() * 12) + 1;
		console.log(ruby)
		var amethyst = Math.floor(Math.random() * 12) + 1;
		console.log(amethyst)
		var tomato = Math.floor(Math.random() * 12) + 1;
		console.log(tomato)
		var diamond = Math.floor(Math.random() * 12) + 1;
		console.log(diamond)

		var totScore = 0 /*the sum of all clicks for each crstal*/
		console.log(totScore)
		var wins = 0
		var losses = 0

		$('#ruby').on('click', function(){
			console.log(ruby);
			$('#ruby').toggle(200).toggle(200);
			totScore = totScore + ruby;
			console.log(totScore);
		});		

		$('#amethyst').on('click', function(){
			console.log(amethyst);
			$('#amethyst').toggle(200).toggle(200);
			totScore = totScore + amethyst;
			console.log(totScore);
		});

		$('#tomato').on('click', function(){
			console.log(tomato);
			$('#tomato').toggle(200).toggle(200);
			totScore = totScore + tomato;
			console.log(totScore);
		});

		$('#diamond').on('click', function(){
			console.log(diamond);
			$('#diamond').toggle(200).toggle(200);
			totScore = totScore + diamond;
			console.log(totScore);
		});

/*		$(this).on('click', function(){
			console.log(this);
			$(this).toggle(200).toggle(200);
			totScore = totScore + this;
			console.log(totScore);
		});*/



		if (totScore == random) {
			wins++;
			$('#wins').html(wins++);
		} else if (totScore > random) {
			losses++;
			$('#losses').html(losses++)
		}
		




		$('#user-Score').html(ruby+amethyst+tomato+diamond);


	});
	</script>
