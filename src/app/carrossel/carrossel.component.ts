import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.css']
})
export class CarrosselComponent implements OnInit, OnDestroy {

  timerSubs!: Subscription;

  @Input() imagens: string[] = [];

  private _indexImagemAtiva: number = 0;

  get indexImagemAtiva(){
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number){
    this._indexImagemAtiva = value < this.imagens.length ? value: 0;
  }

  constructor() { }

  ngOnInit(): void {

      this.iniciarTimer();

  };

  ngOnDestroy(): void {
    this.pararTimer();
  };

  iniciarTimer(): void{
    this.timerSubs = timer(2000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva +1
      );
    });
  };

  pararTimer(): void{
    this.timerSubs?.unsubscribe();
  };

  ativarImagem(index: number){
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  };



}
