export class Constants {

  public get movies() {
  	return this._movies;
  }

  public set movies (v : Object[]) {
  	this._movies = v;
  }

  private _movies = [
  	{
  		id: 0,
  		title: 'Zielona mila',
  		director: 'Frank Darabont',
  		genre: ['Dramat'],
  		country: 'USA',
  		year: 1999,
  		poster: 'http://1.fwcdn.pl/po/08/62/862/7517878.6.jpg',
  		description: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.',
  		duration: '3 godz. 8 min.'
  	},
  	{
  		id: 1,
  		title: 'Skazani na Shawshank',
  		director: 'Frank Darabont',
  		genre: ['Dramat'],
  		country: 'USA',
  		year: 1994,
  		poster: 'http://1.fwcdn.pl/po/10/48/1048/6925401.6.jpg',
  		description: 'Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.',
  		duration: '2 godz. 22 min.'
  	},
  	{
  		id: 2,
  		title: 'Forest Gump',
  		director: 'Robert Zemeckis',
  		genre: ['Dramat', 'Komedia'],
  		country: 'USA',
  		year: 1994,
  		poster: 'http://1.fwcdn.pl/po/09/98/998/7314731.6.jpg',
  		description: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.',
  		duration: '2 godz. 22 min.'
  	},
  	{
  		id: 3,
  		title: 'Requiem dla snu',
  		director: 'Darren Aronofsky',
  		genre: ['Dramat'],
  		country: 'USA',
  		year: 2000,
  		poster: 'http://1.fwcdn.pl/po/91/36/9136/6908595.6.jpg',
  		description: 'Historia czwórki bohaterów, dla których używki są ucieczką przed otaczającą ich rzeczywistością.',
  		duration: '1 godz. 42min.'
  	},
  	{
  		id: 4,
  		title: 'Leon zawodowiec',
  		director: 'Luc Besson',
  		genre: ['Dramat', 'Kryminał'],
  		country: 'Francja',
  		year: 1994,
  		poster: 'http://1.fwcdn.pl/po/06/71/671/7016965.6.jpg',
  		description: 'Płatny morderca ratuje dwunastoletnią dziewczynkę, której rodzina została zabita przez skorumpowanych policjantów.',
  		duration: '1 godz. 50 min.'
  	},
  	{
  		id: 5,
  		title: 'Matrix',
  		director: 'Lilly Wachowski',
  		genre: ['Akcja', 'Sci-Fi'],
  		country: 'USA',
  		year: 1999,
  		poster: 'http://1.fwcdn.pl/po/06/28/628/7685907.6.jpg',
  		description: 'Haker komputerowy Neo dowiaduje się od tajemniczych rebeliantów, że świat, w którym żyje, jest tylko obrazem przesyłanym do jego mózgu przez roboty.',
  		duration: '2 godz. 16 min.'
  	},
  	{
  		id: 6,
  		title: 'Milczenie owiec',
  		director: 'Jonathan Demme',
  		genre: ['Thriller'],
  		country: 'USA',
  		year: 1991,
  		poster: 'http://1.fwcdn.pl/po/10/47/1047/7714177.6.jpg',
  		description: 'Seryjny morderca i inteligentna agentka łączą siły, by znaleźć przestępcę obdzierającego ze skóry swoje ofiary.',
  		duration: '1 godz. 58 min.'
  	},
  	{
  		id: 7,
  		title: 'Avatar',
  		director: 'James Cameron',
  		genre: ['Sci-Fi'],
  		country: 'Wielka Brytania',
  		year: 2009,
  		poster: 'http://1.fwcdn.pl/po/91/13/299113/7332755.6.jpg',
  		description: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc. ',
  		duration: '2 godz. 42 min.'
  	},
  	{
  		id: 8,
  		title: 'Gladiator',
  		director: 'Ridley Scott',
  		genre: ['Dramat historyczny'],
  		country: 'USA',
  		year: 2000,
  		poster: 'http://1.fwcdn.pl/po/09/36/936/7472818.6.jpg',
  		description: 'Generał Maximus - prawa ręka cesarza, szczęśliwy mąż i ojciec - w jednej chwili traci wszystko. Jako niewolnik-gladiator musi walczyć na arenie o przeżycie.'
  		duration: '2 godz. 35 min.'
  	},
  	{
  		id: 9,
  		title: 'Shrek',
  		director: 'Andrew Adamson',
  		genre: ['Animacja', 'Familijny', 'Komedia'],
  		country: 'USA',
  		year: 2001,
  		poster: 'http://1.fwcdn.pl/po/95/09/9509/7640796.6.jpg',
  		description: 'By odzyskać swój dom, brzydki ogr z gadatliwym osłem wyruszają uwolnić piękną księżniczkę.',
  		duration: '1 godz. 30 min.'
  	},
  	{
  		id: 10,
  		title: 'Szeregowiec Ryan',
  		director: 'Steven Spielberg',
  		genre: ['Dramat', 'Wojenny'],
  		country: 'USA',
  		year: 1998,
  		poster: 'http://1.fwcdn.pl/po/01/79/179/7710998.6.jpg',
  		description: 'W poszukiwaniu zaginionego szeregowca wysłany zostaje doborowy oddział żołnierzy.',
  		duration: '2 godz. 50 min.'
  	},
  	{
  		id: 11,
  		title: 'Titanic',
  		director: 'James Cameron',
  		genre: ['Melodramat', 'Katastroficzny'],
  		country: 'USA',
  		year: 1997,
  		poster: 'http://1.fwcdn.pl/po/01/87/187/7451731.6.jpg',
  		description: 'Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose. ',
  		duration: '3 godz. 14 min.'
  	},
  	{
  		id: 12,
  		title: 'Podziemny krąg',
  		director: 'David Fincher',
  		genre: ['Thriller', 'Psychologiczny'],
  		country: 'USA',
  		year: 1999,
  		poster: 'http://1.fwcdn.pl/po/08/37/837/7522091.6.jpg',
  		description: 'Dwóch mężczyzn znudzonych rutyną zakłada klub, w którym co tydzień odbywają się walki na gołe pięści.',
  		duration: '2 godz. 19 min.'
  	},
  	{
  		id: 13,
  		title: 'Pulp Fiction',
  		director: 'Quentin Tarantino',
  		genre: ['Gangsterski'],
  		country: 'USA',
  		year: 1994,
  		poster: 'http://1.fwcdn.pl/po/10/39/1039/7517880.6.jpg',
  		description: 'Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.',
  		duration: '2 godz. 34 min.'
  	}
  ];

}