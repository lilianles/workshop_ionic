import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private movies = [
    {
        icon: 'md-basketball',
        picture: '../../assets/icon/coach_carter.jpg',
        Title: 'Coach Carter',
        Synopsis: 'L\'histoire vraie de Ken Carter, l\'entraîneur de basket d\'une équipe de lycée, qui devint célèbre en 1999 après avoir renvoyé ses joueurs à leurs chères études, déclarant forfait deux matchs de suite alors que l\'équipe était invaincue, parce que ces derniers n\'avaient pas obtenu des résultats scolaires suffisants.'
    },
    {
        icon: 'logo-dropbox',
        picture: '../../assets/icon/seven.jpg',
        Title: 'Seven',
        Synopsis: 'Pour conclure sa carrière, l\'inspecteur Somerset, vieux flic blasé, tombe à sept jours de la retraite sur un criminel peu ordinaire. John Doe, c\'est ainsi que se fait appeler l\'assassin, a decidé de nettoyer la societé des maux qui la rongent en commettant sept meurtres basés sur les sept pechés capitaux: la gourmandise, l\'avarice, la paresse, l\'orgueil, la luxure, l\'envie et la colère.'
    },
    {
        icon: 'md-book',
        picture: '../../assets/icon/green_book.jpg',
        Title: 'Green book',
        Synopsis: 'En 1962, alors que règne la ségrégation, Tony Lip, un videur italo-américain du Bronx, est engagé pour conduire et protéger le Dr Don Shirley, un pianiste noir de renommée mondiale, lors d’une tournée de concerts. Durant leur périple de Manhattan jusqu’au Sud profond, ils s’appuient sur le Green Book pour dénicher les établissements accueillant les personnes de couleur, où l’on ne refusera pas de servir Shirley et où il ne sera ni humilié ni maltraité.Dans un pays où le mouvement des droits civiques commence à se faire entendre, les deux hommes vont être confrontés au pire de l’âme humaine, dont ils se guérissent grâce à leur générosité et leur humour. Ensemble, ils vont devoir dépasser leurs préjugés, oublier ce qu’ils considéraient comme des différences insurmontables, pour découvrir leur humanité commune.'
    },
  ];

  public items: Array<{ title: string; note: string; icon: string; picture: string}> = [];
  constructor(public navCTRL: NavController) {
    for (let i = 0; i < 3; i++) {
      this.items.push({
        title: this.movies[i].Title,
        note: this.movies[i].Synopsis,
        icon: this.movies[i].icon,
        picture: this.movies[i].picture
      });
    }
  }



  ngOnInit() {
  }

  ShowItem(item: any) {
    let navigationExtras: NavigationExtras = {
        queryParams: {
            movie: item
        }
    };
    this.navCTRL.navigateForward('/profile', navigationExtras);
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
