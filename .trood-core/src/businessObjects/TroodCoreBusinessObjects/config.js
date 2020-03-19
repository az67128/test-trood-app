export default {
  title: 'TroodCoreBusinessObjects',
  models: [
    {
      title: 'activeStatus',
    },
    {
      title: 'activity',
      dependsOn: [
        'employee',
        'activityStatus',
        'matter',
        'document',
        'comment',
        'timeEntry',
        'activityType',
        'invitationList',
        'timer',
        'activityAccessStatus',
      ],
    },
    {
      title: 'activityAccessStatus',
      dependsOn: [
        'activity',
      ],
    },
    {
      title: 'activityStatus',
      dependsOn: [
        'activity',
      ],
    },
    {
      title: 'activityType',
      dependsOn: [
        'activity',
      ],
    },
    {
      title: 'approver',
      dependsOn: [
        'employee',
        'requestVacation',
      ],
    },
    {
      title: 'assessment',
      dependsOn: [
        'employee',
        'teamMember',
      ],
    },
    {
      title: 'bankDetails',
      dependsOn: [
        'requisites',
      ],
    },
    {
      title: 'bill',
      dependsOn: [
        'employee',
        'matter',
        'billStatus',
        'timeEntry',
        'expense',
        'invoice',
        'document',
        'payment',
      ],
    },
    {
      title: 'billPriceList',
      dependsOn: [
        'matter',
        'employee',
        'billPriceListEmployee',
      ],
    },
    {
      title: 'billPriceListEmployee',
      dependsOn: [
        'billPriceList',
        'employee',
      ],
    },
    {
      title: 'billStatus',
      dependsOn: [
        'bill',
      ],
    },
    {
      title: 'budgetType',
      dependsOn: [
        'matter',
      ],
    },
    {
      title: 'candidate',
      dependsOn: [
        'employee',
        'comment',
        'cvRecord',
        'document',
        'contact',
        'vacancyCandidate',
      ],
    },
    {
      title: 'candidateStatus',
      dependsOn: [
        'vacancyCandidate',
      ],
    },
    {
      title: 'client',
      dependsOn: [
        'clientActiveStatus',
        'employee',
        'clientType',
        'payment',
        'contact',
        'comment',
        'document',
        'conflictFirm',
        'contactPerson',
        'matter',
        'requisites',
        'conflictStatus',
        'clientRate',
      ],
    },
    {
      title: 'clientActiveStatus',
      dependsOn: [
        'client',
      ],
    },
    {
      title: 'clientRate',
      dependsOn: [
        'client',
        'employeePosition',
      ],
    },
    {
      title: 'clientType',
      dependsOn: [
        'client',
      ],
    },
    {
      title: 'comment',
      dependsOn: [
        'employee',
        'activity',
        'matter',
        'client',
        'candidate',
        'vacancyCandidate',
      ],
    },
    {
      title: 'conflictFirm',
      dependsOn: [
        'client',
      ],
    },
    {
      title: 'conflictStatus',
      dependsOn: [
        'client',
      ],
    },
    {
      title: 'contact',
      dependsOn: [
        'contactType',
        'employee',
        'contactPerson',
        'client',
        'candidate',
      ],
    },
    {
      title: 'contactPerson',
      dependsOn: [
        'client',
        'matterContactPerson',
        'contact',
      ],
    },
    {
      title: 'contactType',
      dependsOn: [
        'contact',
      ],
    },
    {
      title: 'cvRecord',
      dependsOn: [
        'employee',
        'candidate',
      ],
    },
    {
      title: 'docCustomType',
      dependsOn: [
        'document',
      ],
    },
    {
      title: 'document',
      dependsOn: [
        'employee',
        'activity',
        'matter',
        'client',
        'invoice',
        'candidate',
        'bill',
        'docCustomType',
      ],
    },
    {
      title: 'employee',
      dependsOn: [
        'employeePosition',
        'employeeRole',
        'client',
        'candidate',
        'matter',
        'matterInfo',
        'requestVacation',
        'vacancy',
        'vacancyCandidate',
        'activity',
        'bill',
        'invoice',
        'payment',
        'timeEntry',
        'price',
        'expense',
        'comment',
        'matterEmployee',
        'billPriceListEmployee',
        'invitationListEmployee',
        'contact',
        'cvRecord',
        'document',
        'approver',
        'vacationPeriod',
        'timer',
        'teamMember',
      ],
    },
    {
      title: 'employeePosition',
      dependsOn: [
        'employee',
        'clientRate',
      ],
    },
    {
      title: 'employeeRole',
      dependsOn: [
        'employee',
      ],
    },
    {
      title: 'expense',
      dependsOn: [
        'employee',
        'expenseType',
        'bill',
        'matter',
      ],
    },
    {
      title: 'expenseType',
      dependsOn: [
        'expense',
      ],
    },
    {
      title: 'invitationList',
      dependsOn: [
        'employee',
        'invitationListEmployee',
        'activity',
      ],
    },
    {
      title: 'invitationListEmployee',
      dependsOn: [
        'employee',
        'invitationList',
      ],
    },
    {
      title: 'invoice',
      dependsOn: [
        'employee',
        'bill',
        'document',
      ],
    },
    {
      title: 'matter',
      dependsOn: [
        'employee',
        'client',
        'matterType',
        'matterStatus',
        'matterActiveStatus',
        'budgetType',
        'contactPerson',
        'activity',
        'bill',
        'payment',
        'timeEntry',
        'expense',
        'billPriceList',
        'document',
        'matterContactPerson',
        'comment',
        'matterInfo',
        'teamMember',
      ],
    },
    {
      title: 'matterContactPerson',
      dependsOn: [
        'matter',
        'contactPerson',
      ],
    },
    {
      title: 'matterEmployee',
      dependsOn: [
        'employee',
      ],
    },
    {
      title: 'matterActiveStatus',
      dependsOn: [
        'matter',
      ],
    },
    {
      title: 'matterInfo',
      dependsOn: [
        'employee',
        'matter',
      ],
    },
    {
      title: 'matterStatus',
      dependsOn: [
        'matter',
      ],
    },
    {
      title: 'matterType',
      dependsOn: [
        'matter',
      ],
    },
    {
      title: 'paidStatus',
    },
    {
      title: 'payment',
      dependsOn: [
        'employee',
        'client',
        'matter',
        'bill',
      ],
    },
    {
      title: 'price',
      dependsOn: [
        'priceUnit',
        'employee',
        'utbms',
        'serviceType',
      ],
    },
    {
      title: 'priceUnit',
      dependsOn: [
        'price',
      ],
    },
    {
      title: 'rateType',
      dependsOn: [
        'teamMember',
      ],
    },
    {
      title: 'requestVacation',
      dependsOn: [
        'employee',
        'statusRequestVacation',
        'vacationPeriod',
        'approver',
      ],
    },
    {
      title: 'requisites',
      dependsOn: [
        'client',
        'bankDetails',
      ],
    },
    {
      title: 'resolveCandidate',
      dependsOn: [
        'vacancyCandidate',
      ],
    },
    {
      title: 'serviceType',
      dependsOn: [
        'price',
      ],
    },
    {
      title: 'statusRequestVacation',
      dependsOn: [
        'requestVacation',
      ],
    },
    {
      title: 'teamMember',
      dependsOn: [
        'employee',
        'matter',
        'rateType',
        'assessment',
      ],
    },
    {
      title: 'timeEntry',
      dependsOn: [
        'employee',
        'timeEntryBillable',
        'matter',
        'activity',
        'bill',
        'utbms',
        'timeEntryStatus',
      ],
    },
    {
      title: 'timeEntryBillable',
      dependsOn: [
        'timeEntry',
      ],
    },
    {
      title: 'timeEntryStatus',
      dependsOn: [
        'timeEntry',
      ],
    },
    {
      title: 'timer',
      dependsOn: [
        'timerStatus',
        'employee',
        'activity',
      ],
    },
    {
      title: 'timerStatus',
      dependsOn: [
        'timer',
      ],
    },
    {
      title: 'utbms',
      dependsOn: [
        'timeEntry',
        'price',
      ],
    },
    {
      title: 'vacancy',
      dependsOn: [
        'employee',
        'vacancyStatus',
        'vacancyCandidate',
      ],
    },
    {
      title: 'vacancyCandidate',
      dependsOn: [
        'employee',
        'candidateStatus',
        'resolveCandidate',
        'candidate',
        'vacancy',
        'comment',
      ],
    },
    {
      title: 'vacancyStatus',
      dependsOn: [
        'vacancy',
      ],
    },
    {
      title: 'vacationPeriod',
      dependsOn: [
        'requestVacation',
        'employee',
      ],
    },
  ],
}