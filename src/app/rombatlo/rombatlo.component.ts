/*
* File: rombatlo.component.ts
* Author: Szabó József
* Copyright: 2026, Szabó József
* Group: SZOFT-II/N
* Date: 2026-10-14
* Github: https://github.com/CWGSkyStone/frontend_dolgozat
* Licenc: MIT
* Rombusz területének kiszámítása két átlóból. Feladat 0311.
*/

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-rombatlo',
  imports: [ReactiveFormsModule],
  templateUrl: './rombatlo.component.html'
})
export class RombatloComponent {
  builder = inject(FormBuilder);
  rombatloForm = this.builder.group({
    e: [null as number | null, [Validators.required, Validators.min(Number.MIN_VALUE)]],
    f: [null as number | null, [Validators.required, Validators.min(Number.MIN_VALUE)]],
    area: ['']
  });
  showArea = false;

  startCalc() {
    this.showArea = false;
    this.rombatloForm.markAllAsTouched();
    if (this.rombatloForm.invalid) return;
    const e = Number(this.rombatloForm.value.e);
    const f = Number(this.rombatloForm.value.f);
    const area = this.calcArea(e, f);
    this.rombatloForm.get('area')?.setValue(String(area));
    this.showArea = true;
  }

  calcArea(e: number, f: number): number {
    return e * f / 2;
  }
}
