import {
  Sequelize, 
  Model, 
  DataTypes, 
  BuildOptions,
} from "sequelize";
import { 
  HasManyGetAssociationsMixin,
  HasManyAddAssociationMixin, 
  HasManyHasAssociationMixin, 
  Association,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
} from "sequelize";

interface DBConfiguration {
  database: string;
  user: string;
  password: string;
  host: string;
  dialect: "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql" | undefined;
}
const dbConfiguration : DBConfiguration= {
  database: "graph",
  user: "graph",
  password: "graph",
  host: "localhost",
  dialect: "mysql"
};

const sequelize = new Sequelize(
  dbConfiguration.database,
  dbConfiguration.user,
  dbConfiguration.password,
  {
    host: dbConfiguration.host,
    dialect: dbConfiguration.dialect,
  },
);

class User extends Model {
  public id!: number;
  public name!: string;
  public preferredName!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getProjects!: HasManyGetAssociationsMixin<Project>;
  public addProject!: HasManyAddAssociationMixin<Project, number>;
  public hasProject!: HasManyHasAssociationMixin<Project, number>;
  public countProjects!: HasManyCountAssociationsMixin;
  public createProject!: HasManyCreateAssociationMixin<Project>;

  public readonly projects?: Project[];

  public static associations: {
    projects: Association<User, Project>;
  }
}

class Project extends Model {
  public id!: number;
  public ownerId!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

class Address extends Model {
  public userId!: number;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  preferredName: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  }
}, {
  sequelize,
  tableName: "users"
});

Project.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  ownerId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'projects',
});

Address.init({
  userId: {
    type: DataTypes.INTEGER.UNSIGNED
  },
  address: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  }
}, {
  sequelize,
  tableName:"addresses"
});

User.hasMany(Project, {
  sourceKey: "id",
  foreignKey: "ownerId",
  as: "projects",
});

Address.belongsTo(User, {targetKey: 'id'});
User.hasOne(Address, {sourceKey: 'id'});

const stuff = async () => {
  const newUser = await User.create({
    name: "Johnny",
    preferredName: "John",
  });

  const project = await newUser.createProject({
    name: 'first!',
  });

  const ourUser = await User.findByPk(1, {
    include: [User.associations.projects],
    rejectOnEmpty: true,
  });
}

export {
  User,
  Project,
  Address,
  sequelize,
};
