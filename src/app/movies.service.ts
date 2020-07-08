import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  movies: Array<IMovie> = [
    { id: 0,
      title: 'Мульт в кино. Выпуск №103. Некогда грустить!',
      country: 'Russia',
      genre: 'anime',
      poster: '../../assets/images/1.jpg',
      about: 'Котенок Пончик быстро вылез из-под кровати и стал внимательно смотреть на меня. Я обрадовался тому, что у меня появился первый зритель. Когда я начал петь припев в песне, то Пончик решил мне помочь — стал подпевать, вернее мяукать. Песня получилась немного не такой, как мне хотелось, но зато веселой!',
      comments: [
        {id: 0, nickname: 'Баракуда', text: 'Топчик'},
        {id: 1, nickname: 'Старый Бетмен', text: 'И правда некогда грустить'},
        {id: 2, nickname: 'Little Big', text: 'Котёнок супер, моей дочке понравился'}
      ]
    },
    { id: 1,
      title: 'Новый Бэтмен',
      country: 'USA',
      poster: '../../assets/images/2.jpg',
      genre: 'fantasy',
      about: 'Опасаясь, что действия богоподобного супергероя так и останутся бесконтрольными, грозный и могущественный страж Готэм Сити бросает вызов самому почитаемому в наши дни спасителю Метрополиса, в то время как весь остальной мир решает, какой герой ему по-настоящему нужен.',
      comments: [
        {id: 0, nickname: 'Чиполлино', text: 'Русские супергерои лучше'},
        {id: 1, nickname: 'Рамзес', text: 'Смотрел с женой, нам не понравилось, но тачка у него супер, обменял бы на 1000 верблюдов'},
        {id: 2, nickname: 'Старый Бетмен', text: 'Вы чё, офигели??? а как же я?'}
      ]
    },
    { id: 2, title: 'Однажды... в Голливуде',
      country: 'China',
      poster: '../../assets/images/3.jpg',
      genre: 'history',
      about:'Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии.',
      comments: [
        {id: 0, nickname: 'Mario', text: 'Качество - шлак!'},
        {id: 1, nickname: 'Старый Бетмен', text: 'это экранка, пасаны... мои глаза вытекли...'}
      ]
    },
    { id: 3, title: 'Стриптизёрши',
      country: 'Germany',
      poster: '../../assets/images/4.jpg',
      genre: 'action',
      about: 'Фильм рассказывает о девушках лёгкого поведения, любят танцы, любят клубы, и любят зарабатывать большие деньги, и что они ради этого только не делают...',
      comments: [
        {id: 0, nickname: 'Старый Бэтмен', text: 'Оу, чи-чи'},
        {id: 1, nickname: 'Марина', text: 'пожалуйста, удалите'},
        {id: 2, nickname: 'Серёня', text: 'Огонь бабёхи и фильм огонь!'}
      ]
    }
  ];

  genres: Array<IGenre> = [
    {title: 'Комедии', smile: '../../assets/images/smile/laugh.png'},
    {title: 'Драмы', smile: '../../assets/images/smile/cry.png'},
    {title: 'Фантастика', smile: '../../assets/images/smile/alien.png'},
    {title: 'Ужасы', smile: '../../assets/images/smile/ghost.png'}
  ];

  channels: Array<IChannels> = [
    {name:'Первый Канал', image: '../../assets/images/channels/first.png', schedule: [{time: '13:00', title: 'Новости (с субтитрами)'}, {time: '14:00', title: 'Давай поженимся'}, {time: '15:00', title: 'Другие новости'}]},
    {name:'2х2', image: '../../assets/images/channels/2x2.png', schedule: [{time: '13:00', title: 'МУЛЬТ ТВ. Сезон 4, 7 серия'}, {time: '14:00', title: 'ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия'}, {time: '15:00', title: 'БУРДАШЕВ. Сезон 1, 20 серия'}]},
    {name:'РБК', image: '../../assets/images/channels/rbc.png', schedule: [{time: '13:00', title: 'ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС'}, {time: '14:00', title: 'ДЕНЬ. Главные темы'}, {time: '15:00', title: 'Главные новости'}]},
    {name:'AMEDIA PREMIUM', image: '../../assets/images/channels/amedia.png', schedule: [{time: '13:00', title: 'Клиент всегда мёртв'}, {time: '14:00', title: 'Голодные игры: Сойка-пересмешница. Часть I'}, {time: '15:00', title: 'Секс в большом городе'}]},
    {name:'СТС Ижевск', image: '../../assets/images/channels/sts.png', schedule: [{time: '13:00', title: 'Новости (с субтитрами)'}, {time: '14:00', title: 'Давай поженимся'}, {time: '15:00', title: 'Другие новости'}]},
    ];

  isMovie;

  __searchField = '';

  setSearchField(value) {
    this.__searchField = value;
  };

  getSearchField() {
    return this.__searchField
  }


  getMovies(searchField: string, searchValue: any): Array<IMovie> {
    const find = this.movies.filter((movie) => movie[searchField] === searchValue);
    return find ? find : [];
  }

  getMovie(searchField: string, searchValue: any): IMovie {
    this.isMovie = this.movies.find((movie) => movie[searchField] === searchValue);
    return this.isMovie;
  }

  setComment(nickname: string, text: string, movieId: number) {
    this.movies[movieId].comments.unshift({ nickname, text });
  }

  delComment(commentId: number) {
    this.movies[this.isMovie.id].comments.splice(commentId,1);
  }
}

export interface IMovie {
  id: number;
  title: string;
  country: string;
  genre: string;
  poster: string;
  about: string;
  comments: any;
}

interface IGenre {
  title: string;
  smile: string;
}

interface IChannels {
  name: string;
  image: string;
  schedule: any;
}
