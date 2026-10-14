/*
 * A program rombusz területének meghatározására használható két átlóból.
 * Feladat: 0311. Mentés: rombatlo.
 * Készítő: Szabó József. Osztály: SZOFT-II/N. Dátum: 2026-10-14.
 */
import { Component, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DecimalPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { calcArea } from './rombatlo.math';
@Component({selector:'app-rombatlo',imports:[ReactiveFormsModule,DecimalPipe],templateUrl:'./rombatlo.component.html'})
export class RombatloComponent {
  private readonly builder = inject(FormBuilder);
  readonly rombatloForm = this.builder.group({
    e: [null as number | null, [Validators.required, Validators.min(Number.MIN_VALUE)]],
    f: [null as number | null, [Validators.required, Validators.min(Number.MIN_VALUE)]]
  });
  area: number | null = null;
  error = '';
  constructor() {
    this.rombatloForm.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {this.area=null; this.error='';});
  }
  startCalc(): void {
    this.area=null; this.error='';
    this.rombatloForm.markAllAsTouched();
    if (this.rombatloForm.invalid) return;
    const {e,f}=this.rombatloForm.getRawValue();
    try {this.area=calcArea(e!,f!);}
    catch {this.error='A megadott értékekkel nem számítható ábrázolható terület. Adj meg más pozitív számokat.';}
  }
  clear(): void {this.rombatloForm.reset(); this.area=null; this.error='';}
}
