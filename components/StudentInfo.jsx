"use client";

import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";

export default function StudentInfo({ student }) {


  const {
    name,
    id,
    code,
    women,
    pharma,
    medical,
    total
  } = student

  function getStatus(grade, max) {

    switch (true) {
      case grade === null:
        return 'لم يحضر';
      case grade < max / 2:
        return grade + ' - راسب';
      default:
        return grade;
    }
  }

  function getColor(grade, max) {

    switch (true) {
      case grade === null:
        return 'warning';
      case grade < max / 2:
        return 'danger';
      default:
        return 'success';
    }
  }


  function isPassed() {
    if (
      parseInt(women) >= 25 &&
      parseInt(pharma) >= 25 &&
      parseInt(medical) >= 25 
    ) {
      return 'success'
    }

    return 'danger'
  }


  return (
    <div className="relative grid gap-4 mb-24">

      <h3 className="section__title text-3xl">معلومات الطالب</h3>

      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn className="text-start">اسم الطالب</TableColumn>
          <TableColumn className="text-start">
            {name}
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>الرقم القومى</TableCell>
            <TableCell>
              {id}
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>الاكاديمية</TableCell>
            <TableCell>
              الدلتا للتدريب
            </TableCell>
          </TableRow>

          {code && <TableRow key="3">
            <TableCell>الرقم الاكاديميى</TableCell>
            <TableCell>
              {code}
            </TableCell>
          </TableRow>}

          <TableRow key="4">
            <TableCell>الفرع</TableCell>
            <TableCell>
              {
                `${code}`.slice(0, 1) === 'D' ? 'دسوق' : 'كفر الشيخ'
              }

            </TableCell>
          </TableRow>
        </TableBody>
      </Table>


      <h3 className="section__title">
        نتيجة الترم الثالث
      </h3>

      <Table aria-label="Example static collection table" >
        <TableHeader >
          <TableColumn className="text-start">المادة</TableColumn>
          <TableColumn className="text-start">درجة الطالب</TableColumn>
          <TableColumn className="text-start">الدرجة العظمى</TableColumn>
        </TableHeader>
        <TableBody>

          <TableRow key="1">
            <TableCell className="font-medium">
              تمريض النساء و الاطفال
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={getColor(women, 50)}>
              {getStatus(women, 50)}
              </Chip>
            </TableCell>
            <TableCell className="text-center">50</TableCell>
          </TableRow>

          <TableRow key="2">
            <TableCell className="font-medium">
              الفارما
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={getColor(pharma, 50)}>
                {getStatus(pharma, 50)}
              </Chip>
            </TableCell>
            <TableCell className="text-center">50</TableCell>
          </TableRow>

          <TableRow key="3">
            <TableCell className="font-medium">
              التحاليل الطبية
            </TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={getColor(medical, 50)}>
                {getStatus(medical, 50)}
              </Chip>
            </TableCell>
            <TableCell className="text-center">50</TableCell>
          </TableRow>

          <TableRow key="4">
            <TableCell className="font-medium">المجموع الكلى</TableCell>
            <TableCell className="text-center">
              <Chip className="text-white font-bold" color={isPassed()} >
                {total}
              </Chip>

            </TableCell>
            <TableCell className="text-center">
              150
            </TableCell>
          </TableRow>

          <TableRow key="6">
            <TableCell className="font-medium">حالة الطالب</TableCell>
            <TableCell></TableCell>
            <TableCell colSpan={2}>
              <Chip className="text-white font-bold" color={isPassed()}>
                {isPassed() === 'success' ? 'ناجح' : 'راسب'}
              </Chip>
            </TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </div>
  );
}
