// helpers/date-formatter.ts
import { DatePipe } from '@angular/common';

const datePipe = new DatePipe('en-US');

/**
 * Formats an ISO date string to 'yyyy-MM-dd'.
 * @param isoDate ISO date string like '2020-01-01T00:00:00.000Z'
 * @returns Formatted date string like '2020-01-01', or null if invalid.
 */
export function formatDate(isoDate: Date): string | null {
  if (isoDate) {
    return datePipe.transform(isoDate, 'yyyy-MM-dd');
  }
  return null;
}
