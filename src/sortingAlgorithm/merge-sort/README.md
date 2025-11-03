## トレースの結果

```
mergeSort([4,3,6,9,8,2,5,1,7])
│
├── mergeSort([4,3,6,9])
│   │
│   ├── mergeSort([4,3])
│   │   │
│   │   ├── mergeSort([4]) → [4]
│   │   └── mergeSort([3]) → [3]
│   │   ↓
│   │   merge([4], [3]) → [3,4]
│   │
│   └── mergeSort([6,9])
│       │
│       ├── mergeSort([6]) → [6]
│       └── mergeSort([9]) → [9]
│       ↓
│       merge([6], [9]) → [6,9]
│
│   ↓
│   merge([3,4], [6,9]) → [3,4,6,9]
│
└── mergeSort([8,2,5,1,7])
    │
    ├── mergeSort([8,2])
    │   │
    │   ├── mergeSort([8]) → [8]
    │   └── mergeSort([2]) → [2]
    │   ↓
    │   merge([8], [2]) → [2,8]
    │
    └── mergeSort([5,1,7])
        │
        ├── mergeSort([5]) → [5]
        └── mergeSort([1,7])
            │
            ├── mergeSort([1]) → [1]
            └── mergeSort([7]) → [7]
            ↓
            merge([1],[7]) → [1,7]
        ↓
        merge([5], [1,7]) → [1,5,7]
    ↓
    merge([2,8], [1,5,7]) → [1,2,5,7,8]

↓
merge([3,4,6,9], [1,2,5,7,8])
→ [1,2,3,4,5,6,7,8,9]

```
