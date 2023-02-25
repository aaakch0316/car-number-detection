db = {
	'user' : 'admin',
    'password' : 'admin-hsg135!',
    'host' : 'database-hsg.cfesa4zzsijt.ap-northeast-2.rds.amazonaws.com',
    'port' : 3306,
    'database' : 'hsg'
}
DB_URL = f"mysql+mysqlconnector://{db['user']}:{db['password']}@{db['host']}:{db['port']}/{db['database']}?charset=utf8"