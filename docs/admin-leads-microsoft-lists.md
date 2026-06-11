# Jointec Lead Admin Setup

This website has a private admin page for website leads:

`https://jointec.se/admin/leads`

The admin page is not linked in the public website navigation.

## How It Works

1. A visitor submits the Machine Updates form on the website.
2. `/api/leads` validates the form data.
3. The API saves the lead into Microsoft Lists through Microsoft Graph.
4. The owner opens `/admin/leads`.
5. The owner logs in with the separate admin password.
6. The admin page reads the Microsoft List and shows the leads.
7. The owner can search, filter, export CSV, update lead status and add notes.

## Microsoft List Columns

Create a Microsoft List for website leads with these columns:

- Title
- Company
- Email
- Phone
- Country
- MachineInterest
- SourcePage
- LeadStatus
- Message
- Notes
- Consent
- CreatedDate

Important: Microsoft has display names and internal field names. The code expects the internal
field names above. To avoid issues, create the columns using those exact names first. The visible
display names can be renamed later if needed.

## Vercel Environment Variables

Add these environment variables in Vercel:

```txt
ADMIN_PASSWORD=choose-a-private-admin-password
ADMIN_SESSION_SECRET=generate-a-long-random-secret
MS_TENANT_ID=your-microsoft-tenant-id
MS_CLIENT_ID=your-azure-app-client-id
MS_CLIENT_SECRET=your-azure-app-client-secret
MS_SITE_ID=your-sharepoint-site-id
MS_LIST_ID=your-microsoft-list-id
```

`ADMIN_PASSWORD` is the password used at `/admin/leads`.

`ADMIN_SESSION_SECRET` signs the private login cookie. Use a long random string.

## Microsoft App Permission

Create an Azure App Registration for the website backend and give it Microsoft Graph permission
to read and write the SharePoint list.

Recommended permission:

- `Sites.ReadWrite.All`

For stricter security, use a narrower SharePoint site/list permission if configured by the
Microsoft admin.

## After Deployment

Open:

`https://jointec.se/admin/leads`

Then log in with the private admin password.

If Microsoft Lists is not configured, the admin page will show which environment variables are
missing.

## Local Development Note

The local Vite preview at `127.0.0.1:5173` does not run Vercel API routes. In local preview, the
admin page can only show browser test leads. The real login and Microsoft Lists connection work
after deployment on Vercel or when running with Vercel's local server.
