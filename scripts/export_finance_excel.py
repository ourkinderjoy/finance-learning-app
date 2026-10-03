import json
from pathlib import Path
from openpyxl import Workbook

base_dir = Path(__file__).resolve().parent.parent
json_file = base_dir / 'apps' / 'api' / 'src' / 'templates' / 'finance-template.json'
output_file = base_dir / 'exports' / 'finance-report.xlsx'

with json_file.open('r', encoding='utf-8') as f:
    data = json.load(f)

output_file.parent.mkdir(parents=True, exist_ok=True)

wb = Workbook()
ws = wb.active
ws.title = 'Finance'

ws.append(['Month', 'Balance', 'Transactions Total'])
ws.append(['This Month', data['balance'], sum(item['amount'] for item in data['transactions'])])

ws2 = wb.create_sheet('Learning')
ws2.append(['Language', 'Topic', 'Time', 'Progress'])
for item in data['learning']:
    ws2.append([item['language'], item['topic'], item['time'], item['progress']])

wb.save(output_file)
print(f'Excel file created: {output_file}')
