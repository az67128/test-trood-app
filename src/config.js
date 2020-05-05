export default {
  title: 'TroodCoreProject',
  businessObjects: [
    {
      name: 'TroodCoreBusinessObjects',
      type: 'CUSTODIAN',
      models: {
        activeStatus: {
          endpoint: 'active_status',
        },
        activity: {
          endpoint: 'activity',
        },
        activityAccessStatus: {
          endpoint: 'activity_access_status',
        },
        activityStatus: {
          endpoint: 'activity_status',
        },
        activityType: {
          endpoint: 'activity_type',
        },
        approver: {
          endpoint: 'approver',
        },
        assessment: {
          endpoint: 'assessment',
        },
        bankDetails: {
          endpoint: 'bank_details',
        },
        bill: {
          endpoint: 'bill',
        },
        billPriceList: {
          endpoint: 'bill_price_list',
        },
        billPriceListEmployee: {
          endpoint: 'bill_price_list__employee',
        },
        billStatus: {
          endpoint: 'bill_status',
        },
        budgetType: {
          endpoint: 'budget_type',
        },
        candidate: {
          endpoint: 'candidate',
        },
        candidateStatus: {
          endpoint: 'candidate_status',
        },
        client: {
          endpoint: 'client',
        },
        clientActiveStatus: {
          endpoint: 'client_active_status',
        },
        clientRate: {
          endpoint: 'client_rate',
        },
        clientType: {
          endpoint: 'client_type',
        },
        comment: {
          endpoint: 'comment',
        },
        conflictFirm: {
          endpoint: 'conflict_firm',
        },
        conflictStatus: {
          endpoint: 'conflict_status',
        },
        contact: {
          endpoint: 'contact',
        },
        contactPerson: {
          endpoint: 'contact_person',
        },
        contactType: {
          endpoint: 'contact_type',
        },
        cvRecord: {
          endpoint: 'cv_record',
        },
        docCustomType: {
          endpoint: 'doc_custom_type',
        },
        document: {
          endpoint: 'document',
        },
        employee: {
          endpoint: 'employee',
        },
        employeePosition: {
          endpoint: 'employee_position',
        },
        employeeRole: {
          endpoint: 'employee_role',
        },
        expense: {
          endpoint: 'expense',
        },
        expenseType: {
          endpoint: 'expense_type',
        },
        invitationList: {
          endpoint: 'invitation_list',
        },
        invitationListEmployee: {
          endpoint: 'invitation_list__employee',
        },
        invoice: {
          endpoint: 'invoice',
        },
        matter: {
          endpoint: 'matter',
        },
        matterContactPerson: {
          endpoint: 'matter__contact_person',
        },
        matterEmployee: {
          endpoint: 'matter__employee',
        },
        matterActiveStatus: {
          endpoint: 'matter_active_status',
        },
        matterInfo: {
          endpoint: 'matter_info',
        },
        matterStatus: {
          endpoint: 'matter_status',
        },
        matterType: {
          endpoint: 'matter_type',
        },
        paidStatus: {
          endpoint: 'paid_status',
        },
        payment: {
          endpoint: 'payment',
        },
        price: {
          endpoint: 'price',
        },
        priceUnit: {
          endpoint: 'price_unit',
        },
        rateType: {
          endpoint: 'rate_type',
        },
        requestVacation: {
          endpoint: 'request_vacation',
        },
        requisites: {
          endpoint: 'requisites',
        },
        resolveCandidate: {
          endpoint: 'resolve_candidate',
        },
        serviceType: {
          endpoint: 'service_type',
        },
        statusRequestVacation: {
          endpoint: 'status_request_vacation',
        },
        teamMember: {
          endpoint: 'team_member',
        },
        timeEntry: {
          endpoint: 'time_entry',
        },
        timeEntryBillable: {
          endpoint: 'time_entry_billable',
        },
        timeEntryStatus: {
          endpoint: 'time_entry_status',
        },
        timer: {
          endpoint: 'timer',
        },
        timerStatus: {
          endpoint: 'timer_status',
        },
        utbms: {
          endpoint: 'utbms',
        },
        vacancy: {
          endpoint: 'vacancy',
        },
        vacancyCandidate: {
          endpoint: 'vacancy_candidate',
        },
        vacancyStatus: {
          endpoint: 'vacancy_status',
        },
        vacationPeriod: {
          endpoint: 'vacation_period',
        },
      },
    },
  ],
  libraries: [
    {
      name: 'TroodCoreBusinessComponents',
    },
  ],
  services: {
    auth: {
      profile: 'employee',
    },
    locale: {
      availableLocales: [
        {
          code: 'en',
          name: 'Eng',
        },
      ],
      defaultLocale: 'en',
    },
  },
  pages: [
    {
      title: 'Payments',
      url: 'payments',
      type: 'grid',
      components: [
        {
          id: 'payments-table',
          type: 'LegalCoreComponents/Payments',
          span: 3,
          withMargin: true,
          models: {
            payment: 'payment',
            bill: 'bill',
            client: 'client',
            matter: 'matter',
          },
        },
      ],
    },
    {
      title: 'Activities',
      url: 'activities',
      type: 'grid',
      components: [
        {
          id: 'activities-table',
          type: 'LegalCoreComponents/Activities',
          span: 3,
          withMargin: true,
          models: {
            activity: 'activity',
            activityStatus: 'activityStatus',
            activityAccessStatus: 'activityAccessStatus',
            vacationPeriod: 'vacationPeriod',
            statusRequestVacation: 'statusRequestVacation',
            requestVacation: 'requestVacation',
            activityType: 'activityType',
            employee: 'employee',
          },
        },
      ],
    },
    {
      title: 'Employees',
      url: 'employees',
      type: 'grid',
      components: [
        {
          id: 'employees-table',
          type: 'LegalCoreComponents/Employees',
          span: 3,
          withMargin: true,
          models: {
            employee: 'employee',
            employeeRole: 'employeeRole',
            employeePosition: 'employeePosition',
            contact: 'contact',
            contactType: 'contactType',
          },
        },
      ],
    },
    {
      title: 'Documents',
      url: 'documents',
      type: 'grid',
      components: [
        {
          id: 'documents-table',
          type: 'LegalCoreComponents/Documents',
          span: 3,
          withMargin: true,
          models: {
            activity: 'activity',
            matter: 'matter',
            client: 'client',
            employee: 'employee',
            candidate: 'candidate',
            bill: 'bill',
            document: 'document',
            docCustomType: 'docCustomType',
          },
        },
      ],
    },
    {
      title: 'Table',
      url: 'table',
      type: 'grid',
      components: [
        {
          type: 'TroodCoreComponents/TableView',
          span: 3,
          withMargin: false,
          models: {
            table: 'matter',
            employee: 'employee',
            contactPerson: 'contactPerson',
            budgetType: 'budgetType',
          },
          props: {
            editable: true,
            checking: true,
            exclude: [
              'id',
            ],
            filters: ['responsible', 'important', 'budgetType'],
            search: true,
          },
        },
      ],
    },
  ],
  entityPages: {
    contactPerson: {
      url: 'clients',
      type: 'grid',
      pages: [
        {
          title: 'General',
          url: 'general',
          type: 'grid',
          columns: 12,
          components: [
            {
              id: 'client-header',
              type: 'LegalCoreComponents/ClientHeader',
              span: 12,
              withMargin: true,
            },
            {
              id: 'client-left-grid',
              type: '$TROOD_GRID',
              span: 7,
              components: [
                {
                  id: 'client-info',
                  type: 'LegalCoreComponents/ClientInfo',
                  span: 3,
                  withMargin: true,
                  models: {
                    client: 'client',
                    clientType: 'clientType',
                    clientActiveStatus: 'clientActiveStatus',
                    contact: 'contact',
                    contactType: 'contactType',
                    conflictStatus: 'conflictStatus',
                    employee: 'employee',
                  },
                },
                {
                  id: 'client-contactPerson',
                  type: 'LegalCoreComponents/ContactPersonTableView',
                  span: 3,
                  withMargin: true,
                  models: {
                    contactPerson: 'contactPerson',
                    contact: 'contact',
                    contactType: 'contactType',
                  },
                },
                {
                  id: 'client-requisites',
                  type: 'LegalCoreComponents/ClientRequisites',
                  span: 3,
                  withMargin: true,
                  models: {
                    requisites: 'requisites',
                    bankDetails: 'bankDetails',
                  },
                },
              ],
            },
            {
              id: 'client-right-grid',
              type: '$TROOD_GRID',
              span: 5,
              components: [
                {
                  id: 'client-clientRate',
                  type: 'LegalCoreComponents/ClientRateTableView',
                  span: 3,
                  withMargin: true,
                  models: {
                    clientRate: 'clientRate',
                  },
                },
                {
                  id: 'client-conflictFirm',
                  type: 'LegalCoreComponents/ConflictFirmListView',
                  span: 3,
                  withMargin: true,
                  models: {
                    conflictFirm: 'conflictFirm',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Matters',
          url: 'matters',
          type: 'grid',
          components: [
            {
              id: 'client-matters-header',
              type: 'LegalCoreComponents/ClientMattersHeader',
              span: 12,
              withMargin: true,
              models: {
                matter: 'matter',
              },
            },
            {
              id: 'client-matters-table-view',
              type: 'LegalCoreComponents/ClientMattersTableView',
              span: 12,
              withMargin: true,
              models: {
                matter: 'matter',
                matterStatus: 'matterStatus',
                employee: 'employee',
                client: 'client',
                matterActiveStatus: 'matterActiveStatus',
              },
            },
          ],
        },
        {
          title: 'Documents',
          url: 'documents',
          type: 'grid',
          components: [
            {
              id: 'client-documents-header',
              type: 'LegalCoreComponents/ClientDocumentsHeader',
              span: 12,
              withMargin: true,
              models: {
                document: 'document',
              },
            },
            {
              id: 'client-documents-table-view',
              type: 'LegalCoreComponents/ClientDocumentsTableView',
              span: 12,
              withMargin: true,
              models: {
                client: 'client',
                employee: 'employee',
                matter: 'matter',
                document: 'document',
                docCustomType: 'docCustomType',
              },
            },
          ],
        },
      ],
    },
    bill: {
      url: 'bills',
      type: 'grid',
    },
    expense: {
      url: 'expense',
      type: 'grid',
    },
    employee: {
      url: 'employees',
      type: 'grid',
      pages: [
        {
          title: 'General',
          url: 'general',
          type: 'grid',
          columns: 1,
          components: [
            {
              id: 'employee-header',
              type: 'LegalCoreComponents/EmployeeHeader',
              span: 1,
              withMargin: true,
              models: {
                employee: 'employee',
                contact: 'contact',
                contactType: 'contactType',
              },
            },
            {
              id: 'employee-task-calendar',
              type: 'LegalCoreComponents/EmployeeTaskCalendar',
              span: 1,
              withMargin: true,
              models: {
                activity: 'activity',
                activityStatus: 'activityStatus',
                activityAccessStatus: 'activityAccessStatus',
                activityType: 'activityType',
                vacationPeriod: 'vacationPeriod',
                statusRequestVacation: 'statusRequestVacation',
                employee: 'employee',
                matter: 'matter',
                client: 'client',
                requestVacation: 'requestVacation',
              },
            },
            {
              id: 'employee-time-entry-calendar',
              type: 'LegalCoreComponents/EmployeeTimeEntryCalendar',
              span: 1,
              withMargin: true,
              models: {
                matter: 'matter',
                client: 'client',
                timeEntry: 'timeEntry',
                timeEntryStatus: 'timeEntryStatus',
              },
            },
            {
              id: 'employee-matter',
              type: 'LegalCoreComponents/EmployeeMatterTableView',
              span: 1,
              withMargin: true,
              models: {
                employee: 'employee',
                matter: 'matter',
                matterStatus: 'matterStatus',
                client: 'client',
              },
            },
          ],
        },
        {
          title: 'Efficiency',
          url: 'efficiency',
          type: 'grid',
          columns: 1,
          components: [
            {
              id: 'employee-header',
              type: 'LegalCoreComponents/EmployeeHeader',
              span: 1,
              withMargin: true,
              models: {
                employee: 'employee',
                contact: 'contact',
                contactType: 'contactType',
              },
            },
            {
              id: 'employee-efficiency',
              type: 'LegalCoreComponents/EfficiencyReport',
              span: 1,
              withMargin: true,
              models: {
                client: 'client',
                clientActiveStatus: 'clientActiveStatus',
              },
            },
          ],
        },
        {
          title: 'Evaluation',
          url: 'evaluation',
          type: 'grid',
          components: [
            {
              id: 'employee-evaluation-header',
              type: 'LegalCoreComponents/EmployeeEvaluationHeader',
              span: 3,
              withMargin: true,
              models: {
                employee: 'employee',
                contact: 'contact',
                contactType: 'contactType',
                assessment: 'assessment',
              },
            },
            {
              id: 'employee-evaluation-grid',
              type: '$TROOD_GRID',
              span: 3,
              withMargin: true,
              components: [
                {
                  id: 'employee-assessments',
                  type: 'LegalCoreComponents/EmployeeAssessments',
                  span: 2,
                  withMargin: true,
                  models: {
                    matter: 'matter',
                    client: 'client',
                    assessment: 'assessment',
                    employee: 'employee',
                  },
                },
                {
                  id: 'employee-assessment-edged',
                  type: 'LegalCoreComponents/EmployeeAssessmentEdges',
                  span: 1,
                  withMargin: true,
                  models: {
                    assessment: 'assessment',
                    matter: 'matter',
                    client: 'client',
                    employee: 'employee',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Personal File',
          url: 'presonal-file',
          type: 'grid',
          components: [
            {
              id: 'employee-header',
              type: 'LegalCoreComponents/EmployeeHeader',
              span: 3,
              withMargin: true,
              models: {
                employee: 'employee',
                contact: 'contact',
                contactType: 'contactType',
              },
            },
            {
              id: 'employee-personal-file-info-grid',
              type: '$TROOD_GRID',
              span: 3,
              columns: 2,
              withMargin: true,
              components: [
                {
                  id: 'employee-cv-list',
                  type: 'LegalCoreComponents/EmployeeCVList',
                  span: 1,
                  withMargin: true,
                  models: {
                    cvRecord: 'cvRecord',
                  },
                },
                {
                  id: 'employee-document-list',
                  type: 'LegalCoreComponents/EmployeeDocumentList',
                  span: 1,
                  withMargin: true,
                  models: {
                    document: 'document',
                    employee: 'employee',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    matter: {
      url: 'matters',
      title: 'Matters',
      type: 'grid',
      pages: [
        {
          title: 'General',
          url: 'general',
          type: 'grid',
          columns: 4,
          components: [
            {
              id: 'matter-header',
              type: 'LegalCoreComponents/MatterHeader',
              span: 4,
              withMargin: true,
              models: {
                matter: 'matter',
                matterStatus: 'matterStatus',
              },
            },
            {
              id: 'matter-page-grid',
              type: '$TROOD_GRID',
              span: 4,
              columns: 2,
              components: [
                {
                  id: 'matter-main-info-block',
                  type: 'LegalCoreComponents/MatterMainInfoBlock',
                  span: 2,
                  withMargin: true,
                  models: {
                    client: 'client',
                    employee: 'employee',
                    matter: 'matter',
                    matterType: 'matterType',
                    matterActiveStatus: 'matterActiveStatus',
                    budgetType: 'budgetType',
                  },
                },
                {
                  id: 'matter-info-block',
                  type: 'LegalCoreComponents/MatterInfoBlock',
                  span: 2,
                  withMargin: true,
                  models: {
                    matterInfo: 'matterInfo',
                    employee: 'employee',
                    matter: 'matter',
                  },
                },
                {
                  id: 'matter-comments',
                  type: 'LegalCoreComponents/MatterComments',
                  span: 1,
                  withMargin: true,
                  models: {
                    comment: 'comment',
                    employee: 'employee',
                  },
                },
                {
                  id: 'matter-contactPersons',
                  type: 'LegalCoreComponents/MatterContactPersons',
                  span: 1,
                  withMargin: true,
                  models: {
                    contactPerson: 'contactPerson',
                    contact: 'contact',
                    matter: 'matter',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'Team',
          url: 'team',
          type: 'grid',
          components: [
            {
              id: 'matter-team-header',
              type: 'LegalCoreComponents/MatterTeamHeader',
              span: 3,
              withMargin: true,
              models: {
                teamMember: 'teamMember',
              },
            },
            {
              id: 'matters-team-table-view',
              type: 'LegalCoreComponents/MatterTeamTableView',
              span: 3,
              withMargin: true,
              models: {
                teamMember: 'teamMember',
                rateType: 'rateType',
                employee: 'employee',
                employeePosition: 'employeePosition',
                assessment: 'assessment',
              },
            },
          ],
        },
        {
          title: 'Activities',
          url: 'activities',
          type: 'grid',
          components: [
            {
              id: 'matter-time-header',
              type: 'LegalCoreComponents/MatterTimeHeader',
              span: 3,
              withMargin: true,
              models: {
                activity: 'activity',
              },
            },
            {
              id: 'matters-task-table-view',
              type: 'LegalCoreComponents/MattersTaskTableView',
              span: 3,
              withMargin: true,
              models: {
                activity: 'activity',
                activityStatus: 'activityStatus',
                activityAccessStatus: 'activityAccessStatus',
                vacationPeriod: 'vacationPeriod',
                statusRequestVacation: 'statusRequestVacation',
                requestVacation: 'requestVacation',
                activityType: 'activityType',
                employee: 'employee',
              },
            },
          ],
        },
        {
          title: 'Documents',
          url: 'documents',
          type: 'grid',
          components: [
            {
              id: 'matter-documents-header',
              type: 'LegalCoreComponents/MatterDocumentsHeader',
              span: 3,
              withMargin: true,
              models: {
                document: 'document',
              },
            },
            {
              id: 'matters-documents-table-view',
              type: 'LegalCoreComponents/MatterDocumentsTableView',
              span: 3,
              withMargin: true,
              models: {
                client: 'client',
                employee: 'employee',
                matter: 'matter',
                document: 'document',
                docCustomType: 'docCustomType',
              },
            },
          ],
        },
        {
          title: 'Billing',
          url: 'billing',
          type: 'grid',
          components: [
            {
              id: 'matter-billing-header',
              type: 'LegalCoreComponents/MatterBillingHeader',
              span: 3,
              withMargin: true,
              models: {
                expense: 'expense',
                expenseType: 'expenseType',
                timeEntry: 'timeEntry',
              },
            },
            {
              id: 'matter-billing',
              type: 'LegalCoreComponents/BillingBlock',
              span: 3,
              withMargin: true,
              models: {
                bill: 'bill',
                client: 'client',
                employee: 'employee',
                expense: 'expense',
                expenseType: 'expenseType',
                timeEntry: 'timeEntry',
                timeEntryBillable: 'timeEntryBillable',
                timeEntryStatus: 'timeEntryStatus',
                matter: 'matter',
              },
            },
          ],
        },
        {
          title: 'Invoices',
          url: 'invoices',
          type: 'grid',
          components: [
            {
              id: 'invoices-list-header',
              type: 'LegalCoreComponents/MatterInvoicesHeader',
              span: 3,
              withMargin: true,
            },
            {
              id: 'invoices-table',
              type: 'LegalCoreComponents/MatterInvoicesTableView',
              span: 3,
              withMargin: true,
              models: {
                matter: 'matter',
                invoice: 'invoice',
                bill: 'bill',
                employee: 'employee',
                payment: 'payment',
                billStatus: 'billStatus',
              },
            },
          ],
        },
      ],
    },
    candidate: {
      url: 'candidate',
      title: 'Candidate',
      type: 'grid',
      components: [
        {
          id: 'candidate-header',
          type: 'LegalCoreComponents/CandidateHeader',
          span: 3,
          withMargin: true,
        },
        {
          id: 'candidate-grid',
          type: '$TROOD_GRID',
          span: 3,
          columns: 12,
          withMargin: true,
          components: [
            {
              id: 'candidate-info-grid',
              type: '$TROOD_GRID',
              span: 4,
              withMargin: true,
              components: [
                {
                  id: 'candidate-info',
                  type: 'LegalCoreComponents/CandidateInfoBlock',
                  span: 3,
                  withMargin: true,
                  models: {
                    candidate: 'candidate',
                    contact: 'contact',
                    contactType: 'contactType',
                  },
                },
                {
                  id: 'candidate-document-list',
                  type: 'LegalCoreComponents/CandidateDocumentList',
                  span: 3,
                  withMargin: true,
                  models: {
                    document: 'document',
                    employee: 'employee',
                  },
                },
              ],
            },
            {
              id: 'candidate-cv-list',
              type: 'LegalCoreComponents/CandidateCVList',
              span: 4,
              withMargin: true,
              models: {
                cvRecord: 'cvRecord',
              },
            },
            {
              id: 'candidate-vacancy-list',
              type: 'LegalCoreComponents/CandidateVacancyList',
              span: 4,
              withMargin: true,
              models: {
                vacancyCandidate: 'vacancyCandidate',
                resolveCandidate: 'resolveCandidate',
                candidateStatus: 'candidateStatus',
                employee: 'employee',
                vacancy: 'vacancy',
              },
            },
          ],
        },
      ],
    },
    vacancy: {
      url: 'vacancy',
      title: 'Vacancy',
      type: 'grid',
      components: [
        {
          id: 'vacancy-header',
          type: 'LegalCoreComponents/VacancyHeader',
          span: 3,
          withMargin: true,
          models: {
            vacancy: 'vacancy',
            vacancyStatus: 'vacancyStatus',
          },
        },
        {
          id: 'vacancy-page-grid',
          type: '$TROOD_GRID',
          span: 3,
          columns: 2,
          withMargin: true,
          components: [
            {
              id: 'vacancy-info-block',
              type: 'LegalCoreComponents/VacancyInfoBlock',
              withMargin: true,
              span: 1,
              models: {
                vacancy: 'vacancy',
                vacancyStatus: 'vacancyStatus',
                employee: 'employee',
              },
            },
            {
              id: 'vacancy-candidates',
              type: 'LegalCoreComponents/VacancyCandidatesTableView',
              withMargin: true,
              span: 1,
              models: {
                candidate: 'candidate',
                candidateStatus: 'candidateStatus',
              },
            },
          ],
        },
      ],
    },
  },
}