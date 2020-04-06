print('Start #################################################################');
db.createUser(
  {
    user: "admin",
    pwd: "admin",
    roles: [
      {
        role: "root",
        db: "admin"
      }
    ]
  }
)
db1 = db.getSiblingDB('ermes_api')
db1.createUser(
  {
    user: "user-test",
    pwd: "user-test",
    roles: [
      {
        role: "readWrite",
        db: "ermes_api"
      }
    ]
  }
)
db1.createCollection('funnels')
db1.createCollection('funnelconnectors')
db1.createCollection('funneldatacollections')
db1.createCollection('funnelconnectortimeseries')
db1.createCollection('funnelanomalies')
db1.createCollection('funneldatatimeseries')
db1.createCollection('funnelcontributions')
db1.createCollection('funnelleverages')
db1.createCollection('funneltimeseries')
db1.createCollection('funnelsyntheses')
db1.createCollection('funnelmediadistribs')
db1.createCollection('users')
db1.createCollection('groups')
db1.createCollection('category')
db1.createCollection('criteria')

db2 = db.getSiblingDB('ermes_ds')
db2.createUser(
  {
    user: "user-test",
    pwd: "user-test",
    roles: [
      {
        role: "readWrite",
        db: "ermes_ds"
      }
    ]
  }
)
db2.createCollection('funnelTrends')
db2.createCollection('funnelSectors')
db2.createCollection('funnelSeasonality')

print('End #################################################################');
