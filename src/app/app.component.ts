import { Component } from '@angular/core';
import { Anime } from './anime.componet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  animes: Anime [] = [
    {
      name: "Naruto: Shippuuden",
      description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
      Rating: 8.16,
      episode: 500,
      categorie: "Animation | Drama | Adventure",
      studio: "Studio Pierrot",
      img: "https://i.ibb.co/LYxnX5Z/narutoshipuden.png",
      characters:["Naruto","Sasuke","Itachi"]
    },
    {
      name: "One Piece",
      description: "Gol D. Roger was known as the 'Pirate King',the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
      Rating: 8.54,
      episode: 700,
      categorie: "Animation | Drama | Adventure",
      studio: "Toei Animation",
      img: "https://i.ibb.co/3zHnWsS/onepiece.png",
      characters:["Luffy","Zoro","Sanji","Jinbe","Robin","Nami","Usopp","Chopper","Franki","Brook"]
    },
    {
      name: "Attack on Titan",
      description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.",
      Rating: 8.50,
      episode: 500,
      categorie: "Animation | Drama | Adventure",
      studio: "Wit Studio",
      img: "https://i.ibb.co/g6y5fH5/attacktitan.png",
      characters:["Eren","Mikasa"]
    },
    {
      name: "Monster",
      description: "La serie constaba inicialmente de 128 capítulos, sin embargo, se decidió ampliarla hasta un total de 153capítulos. La serie trata sobre un niño llamado Genki, que acaba atrapado en el Mundo Monster Rancher después de probar un nuevo videojuego. Aunque no se encontrará solo, ya que pronto, encontrará nuevos amigos (y enemigos). En su aventura, no sólo descubrirán los secretos que rodean el Mundo Monster Rancher, sino que además se enfrentarán al villano llamado Moo, que planea conquistar el mundo de Monster Rancher.",
      Rating: 8.16,
      episode: 70,
      categorie: "Animation | Drama | Adventure",
      studio: "Madhouse",
      img: "https://i.ibb.co/yfX9pb1/monster.png",
      characters:[]
    },
    {
      name: "Death Note",
      description: "Light Yagami es un excelente estudiante japonés que ha tenido una vida aburrida. Esto cambia radicalmente cuando encuentra tirado en el suelo un cuaderno conocido como Death Note (Libreta de la Muerte), un cuaderno perdido por Ryuk, un Shinigami (Dios de la muerte). Cualquier humano cuyo nombre esté escrito en el cuaderno morirá, y ahora Light ha decidido utilizar este poder para crear un mundo perfecto sin criminales. Pero cuando los criminales comienzan a morir de forma masiva, las autoridades envían al legendario detective L en busca del asesino. Con L pisándole los talones, Podrá mantener Light su noble propósito incluso arriesgando su vida.",
      Rating: 8.16,
      episode: 500,
      categorie: "Animation | Adventure",
      studio: "Madhouse",
      img: "https://i.ibb.co/3pgxbF1/deathnote.jpg",
      characters:["Ligth","L"]
    },
    {
      name: "Violet Evergarden",
      description: "There are words Violet heard on the battlefield, which she cannot forget. These words were given to her by someone she holds dear, more than anyone else. She does not yet know their meaning.A certain point in time, in the continent of Telesis. The great war which divided the continent into North and South has ended after four years, and the people are welcoming a new generation.",
      Rating: 8.39,
      episode: 14,
      categorie: "Fantasy | Drama ",
      studio: "Kyoto Animation",
      img: "https://i.ibb.co/B6MRYF4/Violet-Evergarden.jpg",
      characters:[]
    },
    {
      name: "Tokyo Ghoul",
      description: "Extraños asesinatos se están sucediendo uno tras otro en Tokyo. Debido a las pruebas encontradas en las escenas, la policía concluye que los ataques son obra de ghouls que se comen a las personas. Kaneki y Hide, dos compañeros de clase, llegan a la conclusión de que si nadie ha visto nunca a esos necrófagos es porque toman la apariencia de seres humanos para ocultarse. Poco sabían entonces de que su teoría sería más cierta de lo que pensaban cuando Kaneki es herido de gravedad por un monstruo y comienza a atraerle cada vez más la carne humana…",
      Rating: 8.01,
      episode: 12,
      categorie: "Action | Mystery",
      studio: "Studio Pierrot",
      img: "https://i.ibb.co/QpnVX5h/Tokyo-Ghoul.jpg",
      characters:["Kaneki"]
    },
    {
      name: "Black Clover",
      description: "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.",
      Rating: 6.55,
      episode: 51,
      categorie: "Magic | Shounen | Adventure",
      studio: "Studio Pierrot",
      img: "https://i.ibb.co/sFC2HBf/Black-Clover.jpg",
      characters:["Asta","Juno"]
    },
    {
      name: "Sword Art Online",
      description: "In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of NerveGear technology, players can control their avatars within the game using nothing but their own thoughts.",
      Rating: 7.66,
      episode: 25,
      categorie: "Drama | Adventure",
      studio: "A-1 Pictures",
      img: "https://i.ibb.co/c39LqW7/Sword-Art-Online.jpg",
      characters:[]
    },
    {
      name: "Nanatsu no Taizai",
      description: "Los “Siete Pecados Capitales”, un grupo de caballeros malignos que conspiraron para derrocar al Reino de Britania, se dice que fueron erradicados por los Caballeros Sagrados, aunque algunos dicen que aún viven. Diez años después, los Caballeros Sagrados dieron un golpe de estado y asesinaron al rey, convirtiéndose en los nuevos y tiránicos regidores del reino. Elizabeth, la única hija del rey, emprende un viaje para encontrar a los “Siete Pecados Capitales” y conseguir su ayuda para recuperar el reino.",
      Rating: 8.30,
      episode: 24,
      categorie: "Animation | Drama | Adventure",
      studio: "A-1 Pictures",
      img: "https://i.ibb.co/3CjG3YN/Nanatsu-no-Taizai.jpg",
      characters:["Escanor","Meliodas"]
    },
    {
      name: "Kiseijuu: Sei no Kakuritsu",
      description: "Basada en el manga de horror y ciencia ficción (del mismo nombre) de Iwaaki Hitoshi. El joven de 17 años Izumi Shinichi vive con su madre y su padre en un tranquilo vecindario de Tokio. Una noche, alienígenas con aspecto de gusanos llamados Parásitos invaden la Tierra, apoderándose del cerebro de las personas entrando por sus oídos o narices. Un Parásito intenta entrar por la oreja de Shinichi mientras él duerme, y falla ya que este usaba audífonos. Pero entra a su cuerpo escarbando su brazo y se apodera de su mano derecha que pasa a llamarse Migi. Como Shinichi fue capaz de evitar que Migi siguiera su viaje hacía su cerebro, ambos seres retienen su intelecto y personalidad. A medida que el dúo se encuentra con otro Parásitos, ambos compatibilizan con su extraña situación y gradualmente forman un fuerte lazo, trabajando juntos para poder sobrevivir. Esto les da una ventaja al momento de luchar contra otros Parásitos que atacan a la pareja al darse cuenta de que Shinichi aún mantiene intacto su cerebro. Shinichi se siente obligado a luchar contra otros Parásitos, que devoran a los humanos como comida, con la ayuda de Migi.",
      Rating: 8.53,
      episode: 24,
      categorie: "Animation | Drama | Adventure",
      studio: "Madhouse",
      img: "https://i.ibb.co/PgY7DKs/Kiseijuu-Sei-no-Kakuritsu.jpg",
      characters:[]
    },
    {
      name: "Hunter x Hunter (2011)",
      description: "Gon Frecks,un niño de 12 años,vive con su tia Mito y su abuela en Isla Ballena, huérfano de madre y según su tía también de padre. Un día Gon es atacado por un oso del bosque, pero es salvado por un cazador quien le explica que está en busca de su maestro para así convertirse en un cazador, el es quien le dice que su padre Gin esta vivo. Enterado de esto Gon decide convertirse en cazador para poder encontrar a su padre.",
      Rating: 9.11,
      episode: 148,
      categorie: "Animation | Drama | Adventure",
      studio: "Madhouse",
      img: "https://i.ibb.co/hVwk3yM/hunterxhunter.jpg",
      characters:["Gon","Kilua"]
    }
  ];
  newAnime = {
      name: "",
      description: "",
      Rating: 0,
      episode: 0,
      categorie: "",
      studio: "",
      img: "",
      characters:[""]
  };

  addAnime(){
    this.animes.push(this.newAnime)
  }
  addCharacter(){
    this.newAnime.characters.push("");
  }
  deleteCharacter(index: number){/*A MEJORAR */
    this.newAnime.characters.splice(index,1)
  }
  
  favoritesAnime: Anime[] =[];

  deshabilitado = false
  addToFavorites(i: number){
    this.favoritesAnime.push(this.animes[i]);
    this.favoritesAnime.length === 4?this.deshabilitado=true:this.deshabilitado=false;
  }
  removeFromFavorites(i: number){
    this.favoritesAnime.splice(i,1);
    this.deshabilitado=false
  }
  btn(){
    /*this.habilitado = !this.habilitado*/
  }
}
