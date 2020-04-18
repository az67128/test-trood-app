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
  ],
  entityPages: {},
}