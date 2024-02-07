import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/WebServices/webservices.service';
import { Constant } from '../../../services/constant-URL/constant';

@Component({
  selector: 'app-questionsbank',
  templateUrl: './questionsbank.component.html',
  styleUrls: ['./questionsbank.component.scss']
})
export class QuestionsbankComponent implements OnInit {
  allQuestionBank: any;

  constructor(private webServices: WebService, private constant: Constant) {}

  questionbankDataColumns = [
    { columnDef: 'qsbankname', header: 'Name' },
    { columnDef: 'class', header: 'Class' },
    { columnDef: 'subject', header: 'Subject' },
    { columnDef: 'nmbrofqs', header: 'No. of Questions' },
    { columnDef: 'total_verified', header: 'Total Verified', disableSort: 'true' },
    { columnDef: 'privacy_level', header: 'Privacy' },
    { columnDef: 'status', header: 'Status' },
    { columnDef: 'created_by', header: 'Created By' },
    {
      columnDef: 'action',
      header: 'Operation',
      actions: ['download', 'edit'],
      disableSort: 'true',
    },
    {
      tableCols: [
        'qsbankname',
        'class',
        'subject',
        'nmbrofqs',
        'total_verified',
        'privacy_level',
        'status',
        'created_by',
        'action',
      ],
    },
  ];

  ngOnInit(): void {
    this.getAllQuestionBank();
  }

  getAllQuestionBank() {
    this.webServices.showLoader();
    this.webServices
      .getMethod(this.constant.elearning.listquestionbank)
      .subscribe((res) => {
        this.allQuestionBank = res.data.allQuestionBanks;
        this.webServices.hideLoader();
      });
  }
}
